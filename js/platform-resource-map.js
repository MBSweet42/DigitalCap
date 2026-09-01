// DigitalCap Platform Resource Mapping
// Maps platform + purpose to resource ID
// Batch 1: Six platforms, reporting purpose

const PLATFORM_RESOURCE_MAPS = {
  discord: {
    reporting: 'discord-report-abuse',
    parental_controls: 'discord-parental-controls',
    'account-recovery': 'discord-account-recovery'
  },
  instagram: {
    reporting: 'instagram-report-abuse'
  },
  roblox: {
    reporting: 'roblox-report-abuse',
    parental_controls: 'roblox-parental-controls',
    'account-recovery': 'roblox-account-recovery'
  },
  snapchat: {
    reporting: 'snapchat-report-abuse',
    parental_controls: 'snapchat-parental-controls',
    'account-recovery': 'snapchat-account-recovery'
  },
  tiktok: {
    reporting: 'tiktok-report-abuse',
    'account-recovery': 'tiktok-account-recovery'
  },
  youtube: {
    reporting: 'youtube-report-abuse',
    'account-recovery': 'youtube-account-recovery'
  }
};
