// DigitalCap RESPOND Engine
// Handles question flow, flag tracking, and result assembly
// Client-side only. No Firebase. No persistence.
// Redesigned for UX: immediate threats interrupt flow, progressive disclosure

class RespondEngine {
  constructor(contentObject) {
    this.content = contentObject;
    this.currentQuestionIndex = 0;
    this.answers = {}; // { questionId: answerValue }
    this.flags = {}; // { flagName: boolean }
    this.incidentType = null; // Selected incident type from Q2
  }

  // Get current question
  getCurrentQuestion() {
    return this.content.questions[this.currentQuestionIndex] || null;
  }

  // Get progress text
  getProgress() {
    return {
      current: this.currentQuestionIndex + 1,
      total: this.content.questions.length
    };
  }

  // Answer current question and potentially advance
  answerQuestion(value) {
    const question = this.getCurrentQuestion();
    if (!question) return { hasMore: false, interruptForSafety: false };

    this.answers[question.id] = value;

    // Question 1: Check for immediate threat that interrupts normal flow
    if (question.id === 'q1') {
      this.flags.immediate_threat = (value === 'yes');
      if (value === 'yes') {
        // Interrupt: go to immediate safety result instead of normal flow
        return { hasMore: false, interruptForSafety: true };
      }
      // If unsure, note it but continue
      if (value === 'unsure') {
        this.flags.threat_unsure = true;
      }
    }

    // Question 2: Incident type selection
    if (question.id === 'q2') {
      this.incidentType = value;
      // Track flags based on incident type
      const answerOption = question.answers.find(a => a.value === value);
      if (answerOption && answerOption.flag) {
        this.flags[answerOption.flag] = true;
      }
    }

    // Question 3: School connection
    if (question.id === 'q3') {
      this.flags.school_related = (value === 'yes');
    }

    // Advance to next question
    if (this.currentQuestionIndex < this.content.questions.length - 1) {
      this.currentQuestionIndex++;
      return { hasMore: true, interruptForSafety: false };
    }

    // Reached end
    return { hasMore: false, interruptForSafety: false };
  }

  // Move to previous question
  goBack() {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
      return true;
    }
    return false;
  }

  // Check if we can go back
  canGoBack() {
    return this.currentQuestionIndex > 0;
  }

  // Check if questionnaire is complete
  isComplete() {
    return this.currentQuestionIndex >= this.content.questions.length;
  }

  // Reset to start
  restart() {
    this.currentQuestionIndex = 0;
    this.answers = {};
    this.flags = {};
    this.incidentType = null;
  }

  // Assemble result based on answers
  // Used for normal completion (not immediate safety)
  assembleResult() {
    const result = {
      pathId: this.content.id,
      flags: this.flags,
      incidentType: this.incidentType,
      primaryActions: [],
      deeperHelp: [],
      showSchoolOption: false,
      notes: ''
    };

    // Determine which primary actions to show
    if (this.flags.impersonation) {
      result.primaryActions = this.content.primaryActions.impersonation;
    } else if (this.flags.image_related) {
      result.primaryActions = this.content.primaryActions.images;
    } else {
      result.primaryActions = this.content.primaryActions.default;
    }

    // Always include talk section
    result.deeperHelp.push({
      id: 'talk',
      title: this.content.deeperHelp.talk.title,
      opener: this.content.deeperHelp.talk.opener,
      points: this.content.deeperHelp.talk.points
    });

    // Always include reporting section
    result.deeperHelp.push({
      id: 'reporting',
      title: this.content.deeperHelp.reporting.title,
      intro: this.content.deeperHelp.reporting.intro,
      points: this.content.deeperHelp.reporting.points
    });

    // Include school section only if school-related
    if (this.flags.school_related) {
      result.deeperHelp.push({
        id: 'school',
        title: this.content.deeperHelp.school.title,
        intro: this.content.deeperHelp.school.intro,
        points: this.content.deeperHelp.school.points
      });
      result.showSchoolOption = true;
    }

    // Always include prevention section
    result.deeperHelp.push({
      id: 'prevent',
      title: this.content.deeperHelp.prevent.title,
      intro: this.content.deeperHelp.prevent.intro,
      points: this.content.deeperHelp.prevent.points
    });

    // If threat was unsure, add a small note
    if (this.flags.threat_unsure) {
      result.notes = this.content.unsureSafetyNote;
    }

    return result;
  }

  // Get immediate safety result
  getImmediateSafetyResult() {
    return {
      type: 'immediate-safety',
      content: this.content.immediateSafety
    };
  }
}

// Export for use in respond.html
if (typeof module !== 'undefined' && module.exports) {
  module.exports = RespondEngine;
}
