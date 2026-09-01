// Digital Exposure Level - Centralized Configuration & Helpers
// Phase 4A: Shared data structures and validation logic
// Exposes single global namespace: window.DigitalCapExposure

(function() {
  'use strict';

  // ========== EXPOSURE LEVELS ==========

  const LEVELS = {
    LOWER: 'lower',
    MODERATE: 'moderate',
    HIGHER: 'higher',
    VERY_HIGH: 'very_high'
  };

  // ========== ORDINAL MAPPING ==========
  // Lower number = less exposure
  const ORDINAL = {
    lower: 1,
    moderate: 2,
    higher: 3,
    very_high: 4
  };

  // ========== PUBLIC LABELS ==========

  const LABELS = {
    lower: 'Lower Exposure',
    moderate: 'Moderate Exposure',
    higher: 'Higher Exposure',
    very_high: 'Very High Exposure'
  };

  // Badges with emoji for display
  const BADGES = {
    lower: '🟢 Lower Exposure',
    moderate: '🟡 Moderate Exposure',
    higher: '🟠 Higher Exposure',
    very_high: '🔴 Very High Exposure'
  };

  // ========== COLORS FOR BADGES ==========
  // Not a safety judgment; visual organization only

  const COLORS = {
    lower: {
      text: '#2EC4B6',
      bg: 'rgba(46, 196, 182, 0.15)'
    },
    moderate: {
      text: '#FFB703',
      bg: 'rgba(255, 183, 3, 0.15)'
    },
    higher: {
      text: '#FF8C42',
      bg: 'rgba(255, 140, 66, 0.15)'
    },
    very_high: {
      text: '#FF6B6B',
      bg: 'rgba(255, 107, 107, 0.15)'
    }
  };

  // ========== EXPOSURE FACTORS ==========

  const FACTORS = {
    communication: {
      key: 'communication',
      label: 'Direct Communication'
    },
    unknown_people_contact: {
      key: 'unknown_people_contact',
      label: 'Contact from Unknown People'
    },
    public_visibility: {
      key: 'public_visibility',
      label: 'Public Visibility'
    },
    location_personal_data: {
      key: 'location_personal_data',
      label: 'Location & Personal Information Exposure'
    },
    content_exposure: {
      key: 'content_exposure',
      label: 'Unfiltered Content Discovery'
    },
    content_persistence: {
      key: 'content_persistence',
      label: 'Limited Control Over Shared Content'
    },
    money_transactions: {
      key: 'money_transactions',
      label: 'Financial Transactions'
    },
    outside_access: {
      key: 'outside_access',
      label: 'External Links & Off-Platform Access'
    }
  };

  // Quick reference array of valid factor keys
  const FACTOR_KEYS = Object.keys(FACTORS);

  // ========== VALIDATION CONSTANTS ==========

  const FACTOR_SEVERITIES = ['low', 'medium', 'high'];

  const SAFEGUARD_IMPACTS = {
    REDUCES: 'reduces',
    MITIGATES: 'mitigates',
    MANAGES: 'manages'
  };

  const SAFEGUARD_CATEGORIES = ['privacy', 'communication', 'content', 'financial', 'location', 'behavior'];

  const SAFEGUARD_TYPES = ['setting', 'feature', 'device', 'behavior'];

  const SAFEGUARD_AVAILABILITY = ['always', 'some_accounts', 'requires_premium'];

  // ========== HELPER FUNCTIONS ==========

  /**
   * Validate exposure level
   * @param {*} value - Value to check
   * @returns {boolean} True if value is a valid exposure level
   */
  function isValidExposureLevel(value) {
    return value === 'lower' ||
           value === 'moderate' ||
           value === 'higher' ||
           value === 'very_high';
  }

  /**
   * Get ordinal value for exposure level
   * @param {string} level - Exposure level string
   * @returns {number|null} Ordinal value (1-4) or null if invalid
   */
  function getExposureOrdinal(level) {
    if (typeof level !== 'string') return null;
    return ORDINAL[level] || null;
  }

  /**
   * Validate ordinal relationship: floor <= protected <= base
   * @param {string} floor - Exposure floor level
   * @param {string} protectedLevel - Protected exposure level
   * @param {string} base - Base exposure level
   * @returns {boolean} True if ordinal relationship is valid
   */
  function validateOrdinalRelationship(floor, protectedLevel, base) {
    const ordFloor = getExposureOrdinal(floor);
    const ordProtected = getExposureOrdinal(protectedLevel);
    const ordBase = getExposureOrdinal(base);

    if (ordFloor === null || ordProtected === null || ordBase === null) {
      return false;
    }

    return ordFloor <= ordProtected && ordProtected <= ordBase;
  }

  /**
   * Validate exposure factor key
   * @param {*} value - Value to check
   * @returns {boolean} True if value is a valid factor key
   */
  function isValidFactorKey(value) {
    return FACTOR_KEYS.includes(value);
  }

  /**
   * Detect legacy Safety Rating data (v1)
   * @param {*} app - App object to check
   * @returns {boolean} True if object has valid legacy Safety Rating
   */
  function isLegacySafetyData(app) {
    if (!app || typeof app !== 'object') return false;

    const rating = app.safetyRating;
    const label = app.safetyLabel;

    // safetyRating must be numeric 1, 2, 3, or 4
    if (typeof rating !== 'number' || ![1, 2, 3, 4].includes(rating)) {
      return false;
    }

    // safetyLabel must be a non-empty string
    if (typeof label !== 'string' || label.trim().length === 0) {
      return false;
    }

    return true;
  }

  /**
   * Validate complete v2 Digital Exposure Level data (simplified schema)
   * Accepts both new simplified v2 records and older elaborate v2 records.
   * @param {*} app - App object to check
   * @returns {boolean} True if valid v2 data structure (new or old)
   */
  function isCompleteV2ExposureData(app) {
    if (!app || typeof app !== 'object') return false;

    // schemaVersion must be 2
    if (app.schemaVersion !== 2) return false;

    // exposureLevel must be valid enum (REQUIRED)
    if (!isValidExposureLevel(app.exposureLevel)) return false;

    // exposureExplanation must be non-empty string (REQUIRED)
    if (typeof app.exposureExplanation !== 'string' || app.exposureExplanation.trim().length === 0) {
      return false;
    }

    // exposureFactors must be array (REQUIRED, may be empty)
    if (!Array.isArray(app.exposureFactors)) return false;

    // Validate factors: accept both new string format and old object format
    if (app.exposureFactors.length > 0) {
      for (const factor of app.exposureFactors) {
        // New simplified format: factor is just a string key
        if (typeof factor === 'string') {
          if (!isValidFactorKey(factor)) return false;
        }
        // Old elaborate format: factor is an object with factorKey
        else if (typeof factor === 'object' && factor !== null) {
          if (!isValidFactorKey(factor.factorKey)) return false;
          // Severity is optional in simplified format, but validate if present
          if (factor.severity !== undefined && !FACTOR_SEVERITIES.includes(factor.severity)) {
            return false;
          }
          // Evidence is optional, no validation required
        } else {
          return false;
        }
      }
    }

    // protectedExposureLevel must be valid enum (REQUIRED)
    if (!isValidExposureLevel(app.protectedExposureLevel)) return false;

    // protectedExplanation must be non-empty string (REQUIRED in simplified schema)
    if (typeof app.protectedExplanation !== 'string' || app.protectedExplanation.trim().length === 0) {
      return false;
    }

    // recommendedSafeguards must be array (REQUIRED, may be empty)
    if (!Array.isArray(app.recommendedSafeguards)) return false;

    // Validate each safeguard if present
    if (app.recommendedSafeguards.length > 0) {
      for (const safeguard of app.recommendedSafeguards) {
        // label is REQUIRED (non-empty string)
        if (typeof safeguard.label !== 'string' || safeguard.label.trim().length === 0) {
          return false;
        }

        // instructions is REQUIRED (non-empty string)
        if (typeof safeguard.instructions !== 'string' || safeguard.instructions.trim().length === 0) {
          return false;
        }

        // Validate optional old fields if present
        // (do not require them, but validate type/enum if they exist)

        if (safeguard.id !== undefined) {
          if (typeof safeguard.id !== 'string' || safeguard.id.trim().length === 0) {
            return false;
          }
        }

        if (safeguard.category !== undefined) {
          if (!SAFEGUARD_CATEGORIES.includes(safeguard.category)) {
            return false;
          }
        }

        if (safeguard.type !== undefined) {
          if (!SAFEGUARD_TYPES.includes(safeguard.type)) {
            return false;
          }
        }

        if (safeguard.description !== undefined) {
          if (typeof safeguard.description !== 'string') {
            return false;
          }
          // allow empty description in old records for backward compat
        }

        if (safeguard.impactLevel !== undefined) {
          if (!Object.values(SAFEGUARD_IMPACTS).includes(safeguard.impactLevel)) {
            return false;
          }
        }

        if (safeguard.reducesFactors !== undefined) {
          if (!Array.isArray(safeguard.reducesFactors)) {
            return false;
          }
          // Validate each factor key
          for (const factor of safeguard.reducesFactors) {
            if (!isValidFactorKey(factor)) return false;
          }

          // INTEGRITY RULE: Only "reduces" impact can have reducesFactors
          if (safeguard.impactLevel &&
              (safeguard.impactLevel === 'mitigates' || safeguard.impactLevel === 'manages') &&
              safeguard.reducesFactors.length > 0) {
            return false;
          }
        }

        if (safeguard.availability !== undefined) {
          if (!SAFEGUARD_AVAILABILITY.includes(safeguard.availability)) {
            return false;
          }
        }

        if (safeguard.limitations !== undefined) {
          if (!Array.isArray(safeguard.limitations)) {
            return false;
          }
        }
      }
    }

    // Optional old fields (not required in simplified schema)
    // exposureFloor and floorRationale are optional
    if (app.exposureFloor !== undefined) {
      if (!isValidExposureLevel(app.exposureFloor)) return false;
    }

    if (app.floorRationale !== undefined) {
      if (typeof app.floorRationale !== 'string') return false;
      // allow empty floorRationale for backward compat
    }

    // residualExposure is optional (not required in simplified schema)
    if (app.residualExposure !== undefined) {
      if (!Array.isArray(app.residualExposure)) return false;

      // Validate each residual if present (for old records)
      if (app.residualExposure.length > 0) {
        for (const residual of app.residualExposure) {
          if (typeof residual.exposureFactor !== 'string' || !isValidFactorKey(residual.exposureFactor)) return false;
          if (typeof residual.statement !== 'string' || residual.statement.trim().length === 0) return false;
          if (typeof residual.reason !== 'string' || residual.reason.trim().length === 0) return false;

          if (residual.mitigations !== undefined) {
            if (!Array.isArray(residual.mitigations)) return false;
          }
        }
      }
    }

    // SIMPLIFIED RULE: protected <= base (only ordinal check, no floor)
    const ordBase = getExposureOrdinal(app.exposureLevel);
    const ordProtected = getExposureOrdinal(app.protectedExposureLevel);

    if (ordBase === null || ordProtected === null) {
      return false;
    }

    if (ordProtected > ordBase) {
      return false;
    }

    // All validations passed
    return true;
  }

  /**
   * Check if app has any valid rating (v1 or v2)
   * @param {*} app - App object to check
   * @returns {boolean} True if has either complete v2 or legacy v1 data
   */
  function hasAnyRating(app) {
    return isCompleteV2ExposureData(app) || isLegacySafetyData(app);
  }

  // ========== EXPOSE GLOBAL NAMESPACE ==========

  window.DigitalCapExposure = {
    // Configuration constants
    levels: LEVELS,
    ordinal: ORDINAL,
    labels: LABELS,
    badges: BADGES,
    colors: COLORS,
    factors: FACTORS,
    factorKeys: FACTOR_KEYS,
    factorSeverities: FACTOR_SEVERITIES,
    safeguardImpacts: SAFEGUARD_IMPACTS,
    safeguardCategories: SAFEGUARD_CATEGORIES,
    safeguardTypes: SAFEGUARD_TYPES,
    safeguardAvailability: SAFEGUARD_AVAILABILITY,

    // Validation helpers
    isValidExposureLevel: isValidExposureLevel,
    getExposureOrdinal: getExposureOrdinal,
    validateOrdinalRelationship: validateOrdinalRelationship,
    isValidFactorKey: isValidFactorKey,
    isLegacySafetyData: isLegacySafetyData,
    isCompleteV2ExposureData: isCompleteV2ExposureData,
    hasAnyRating: hasAnyRating
  };
})();
