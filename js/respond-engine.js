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

    // Check for interrupt behavior (e.g., immediate safety)
    if (question.interruptBehavior && question.interruptBehavior.trigger === 'immediate-safety') {
      if (value === question.interruptBehavior.triggerValue) {
        this.flags.immediate_threat = true;
        return { hasMore: false, interruptForSafety: true };
      }
      if (question.interruptBehavior.treatUnsureAsRisk && value === 'unsure') {
        this.flags.threat_unsure = true;
      }
    }

    // Capture incident type if question declares it
    if (question.captureAs === 'incidentType') {
      this.incidentType = value;
    }

    // Track flags from answer metadata
    const answerOption = question.answers.find(a => a.value === value);
    if (answerOption && answerOption.flag) {
      this.flags[answerOption.flag] = true;
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

    // Determine which primary actions to show using rules
    let selectedActionKey = 'default';
    if (this.content.primaryActionsRules && Array.isArray(this.content.primaryActionsRules)) {
      for (const rule of this.content.primaryActionsRules) {
        if (this._evaluateRuleCondition(rule.when)) {
          selectedActionKey = rule.use;
          break;
        }
      }
    }
    result.primaryActions = this.content.primaryActions[selectedActionKey] || this.content.primaryActions.default || [];

    // Resolve recommendations: optional title replacement with fallback safety
    result.primaryActions = result.primaryActions.map(action => {
      if (action.recommendationId && typeof RESPOND_RECOMMENDATIONS !== 'undefined') {
        const recommendation = RESPOND_RECOMMENDATIONS[action.recommendationId];
        if (recommendation && recommendation.title) {
          return { ...action, title: recommendation.title };
        }
      }
      return action;
    });

    // Assemble deeper-help sections using data-driven logic
    if (this.content.deeperHelpSections && Array.isArray(this.content.deeperHelpSections)) {
      this.content.deeperHelpSections.forEach(section => {
        if (this._shouldShowDeeperHelpSection(section)) {
          result.deeperHelp.push({
            id: section.id,
            title: section.title,
            opener: section.opener,
            intro: section.intro,
            points: section.points
          });
          // Track school option for backward compatibility
          if (section.id === 'school') {
            result.showSchoolOption = true;
          }
        }
      });
    }

    // If threat was unsure, add a small note
    if (this.flags.threat_unsure) {
      result.notes = this.content.unsureSafetyNote;
    }

    return result;
  }

  // Helper: Evaluate a rule condition
  _evaluateRuleCondition(condition) {
    if (!condition) return false;
    if (condition.flag) {
      return this.flags[condition.flag] === true;
    }
    return false;
  }

  // Helper: Determine if a deeper-help section should be shown
  _shouldShowDeeperHelpSection(section) {
    if (section.show === 'always') return true;
    if (section.show === 'whenFlag' && section.flag) {
      return this.flags[section.flag] === true;
    }
    if (section.show === 'never') return false;
    // Default: show (backward compatibility)
    return true;
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
