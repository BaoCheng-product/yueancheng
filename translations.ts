import { Language } from './types';

type Translation = {
  header: {
    home: string;
    article: string;
    pricing: string;
    getStarted: string;
  };
  landing: {
    title: string;
    subtitle: string;
    whatsappButton: string;
    otherAppsButton: string;
    fab: string;
    mockup: {
      voiceMessage: string;
      aiResponse: string;
      dietCategory: string;
      shoppingCategory: string;
      time: string;
      lunchItem: string;
      shoppingItem: string;
    };
  };
  profileMenu: {
    yourProfile: string;
    general: string;
    about: string;
    logout: string;
  };
  chat: {
    welcome: {
      title: string;
      subtitle1: string;
      subtitle2: string;
    };
    thinking: string;
    errorMessage: string;
    placeholder: string;
    listening: string;
    voiceAccounting: string;
    micPermissionTooltip: string;
    micPermissionDeniedAlert: string;
    micPermissionRequiredAlert: string;
    mockTranscription: string;
    micTooltip: {
      releaseToSend: string;
      releaseToCancel: string;
    };
  };
  profile: {
    premium: {
      title: string;
      subtitle: string;
      button: string;
    };
  };
  settings: {
    account: string;
    general: string;
    about: string;
    signOut: string;
  };
  account: {
    name: string;
    email: string;
    connectedAccounts: string;
    connected: string;
    connect: string;
    connectHint: string;
    feedback: string;
    feedbackPrompt: string;
    feedbackOptions: {
      verySatisfied: string;
      satisfied: string;
      neutral: string;
      unsatisfied: string;
      veryUnsatisfied: string;
    };
  };
  about: {
    followUs: string;
    contactUs: string;
    contactDescription: string;
    feedbackButton: string;
    termsTitle: string;
  };
  general: {
    language: string;
    defaultCurrency: string;
    currencyOptions: {
      cny: string;
      usd: string;
      eur: string;
      jpy: string;
      gbp: string;
      aud: string;
      cad: string;
      chf: string;
      hkd: string;
      sgd: string;
    };
  };
  footer: {
    copyright: string;
    terms: string;
    privacy: string;
  };
};

export const translations: Record<Language, Translation> = {
  en: {
    header: {
      home: 'Home',
      article: 'Article',
      pricing: 'Pricing',
      getStarted: 'Get Started',
    },
    landing: {
      title: 'Chat to Keep Accounts, AI Helps You Save Money',
      subtitle: 'Manage Finances Instantly via',
      whatsappButton: 'Get Started on WhatsApp',
      otherAppsButton: 'Try On Other Apps',
      fab: 'Chat Giraffe',
      mockup: {
        voiceMessage: 'Lunch cost $120, online clothing purchase $300, please record it.',
        aiResponse: 'Okay, I understand, completed.',
        dietCategory: 'Diet',
        shoppingCategory: 'Shopping',
        time: 'Today 16:20',
        lunchItem: 'Lunch Gathering',
        shoppingItem: 'Online Clothing Purchase',
      },
    },
    profileMenu: {
      yourProfile: 'Your Profile',
      general: 'General',
      about: 'About ChatGiraffe',
      logout: 'Logout',
    },
    chat: {
      welcome: {
        title: 'Welcome To Chat Giraffe',
        subtitle1: 'Manage Your Finances Online With Chat Giraffe.',
        subtitle2: 'No Third-Party Apps Required',
      },
      thinking: 'ChatGiraffe is thinking...',
      errorMessage: 'Sorry, something went wrong. Please try again.',
      placeholder: 'Send a message to Chat Giraffe',
      listening: 'Listening...',
      voiceAccounting: 'Voice accounting',
      micPermissionTooltip: 'Please enable microphone permissions in your browser settings',
      micPermissionDeniedAlert: 'Microphone permission is denied. Please enable it in your browser settings.',
      micPermissionRequiredAlert: 'Microphone permission is required for voice input.',
      mockTranscription: "Breakfast 5 yuan, dinner 5 yuan.",
      micTooltip: {
        releaseToSend: 'Release to send, slide up to cancel',
        releaseToCancel: 'Release to cancel',
      },
    },
    profile: {
      premium: {
        title: 'Unlimited Use',
        subtitle: 'Chat Giraffe Premium Plan',
        button: 'Get started for free$0',
      },
    },
    settings: {
      account: 'Account',
      general: 'General',
      about: 'About ChatGiraffe',
      signOut: 'Sign Out',
    },
    account: {
      name: 'Name',
      email: 'Email',
      connectedAccounts: 'Connected Accounts',
      connected: 'Connected',
      connect: 'Connect',
      connectHint: 'Connect your Google or Apple account to sign in to ChatGiraffe easily',
      feedback: 'Feedback To Us',
      feedbackPrompt: 'How do you feel ?',
      feedbackOptions: {
        verySatisfied: 'Very Satisfied',
        satisfied: 'Satisfied',
        neutral: 'Neutral',
        unsatisfied: 'Unsatisfied',
        veryUnsatisfied: 'Very Unsatisfied',
      },
    },
    about: {
      followUs: 'Follow Us',
      contactUs: 'Contact Us',
      contactDescription: 'Feedback, Bug Reports, Feature Requests',
      feedbackButton: 'Feedback',
      termsTitle: 'Terms',
    },
    general: {
      language: 'Language',
      defaultCurrency: 'Default Currency',
      currencyOptions: {
        cny: 'CNY - Chinese Yuan',
        usd: 'USD - US Dollar',
        eur: 'EUR - Euro',
        jpy: 'JPY - Japanese Yen',
        gbp: 'GBP - British Pound',
        aud: 'AUD - Australian Dollar',
        cad: 'CAD - Canadian Dollar',
        chf: 'CHF - Swiss Franc',
        hkd: 'HKD - Hong Kong Dollar',
        sgd: 'SGD - Singapore Dollar',
      },
    },
    footer: {
      copyright: '© 2025 ChatGiraffe All Rights Reserved',
      terms: 'Terms Of Use',
      privacy: 'Privacy Policy',
    },
  },
  zh: {
    header: {
      home: '首页',
      article: '文章',
      pricing: '价格',
      getStarted: '开始使用',
    },
    landing: {
      title: '聊天记账，AI帮你省钱',
      subtitle: '即时管理财务通过',
      whatsappButton: '在WhatsApp上开始',
      otherAppsButton: '尝试其他应用',
      fab: '聊天长颈鹿',
      mockup: {
        voiceMessage: '午餐花费$120，在线购买衣物$300，请记录。',
        aiResponse: '好的，我明白了，已完成。',
        dietCategory: '餐饮',
        shoppingCategory: '购物',
        time: '今天 16:20',
        lunchItem: '午餐聚会',
        shoppingItem: '在线服装购买',
      },
    },
    profileMenu: {
      yourProfile: '您的个人资料',
      general: '通用',
      about: '关于ChatGiraffe',
      logout: '登出',
    },
    chat: {
      welcome: {
        title: '欢迎来到Chat Giraffe',
        subtitle1: '通过Chat Giraffe在线管理您的财务。',
        subtitle2: '无需第三方应用',
      },
      thinking: 'ChatGiraffe正在思考……',
      errorMessage: '抱歉，出错了。请再试一次。',
      placeholder: '发送消息给Chat Giraffe',
      listening: '正在聆听...',
      voiceAccounting: '语音记账',
      micPermissionTooltip: '请在浏览器设置中启用麦克风权限',
      micPermissionDeniedAlert: '麦克风权限被拒绝。请在您的浏览器设置中启用它。',
      micPermissionRequiredAlert: '语音输入需要麦克风权限。',
      mockTranscription: "早饭5元，晚饭5元。",
      micTooltip: {
        releaseToSend: '松手发送，上移取消',
        releaseToCancel: '松手即可取消',
      },
    },
    profile: {
      premium: {
        title: '无限使用',
        subtitle: 'Chat Giraffe 高级版计划',
        button: '免费开始$0',
      },
    },
    settings: {
      account: '账户',
      general: '通用',
      about: '关于ChatGiraffe',
      signOut: '登出',
    },
    account: {
      name: '姓名',
      email: '电子邮件',
      connectedAccounts: '已连接账户',
      connected: '已连接',
      connect: '连接',
      connectHint: '连接您的Google或Apple账户以轻松登录ChatGiraffe',
      feedback: '向我们反馈',
      feedbackPrompt: '您感觉如何？',
      feedbackOptions: {
        verySatisfied: '非常满意',
        satisfied: '满意',
        neutral: '一般',
        unsatisfied: '不满意',
        veryUnsatisfied: '非常不满意',
      },
    },
    about: {
      followUs: '关注我们',
      contactUs: '联系我们',
      contactDescription: '反馈、错误报告、功能请求',
      feedbackButton: '反馈',
      termsTitle: '条款',
    },
    general: {
      language: '语言',
      defaultCurrency: '默认货币',
      currencyOptions: {
        cny: 'CNY - 人民币',
        usd: 'USD - 美元',
        eur: 'EUR - 欧元',
        jpy: 'JPY - 日元',
        gbp: 'GBP - 英镑',
        aud: 'AUD - 澳大利亚元',
        cad: 'CAD - 加拿大元',
        chf: 'CHF - 瑞士法郎',
        hkd: 'HKD - 港元',
        sgd: 'SGD - 新加坡元',
      },
    },
    footer: {
      copyright: '© 2025 ChatGiraffe 版权所有',
      terms: '使用条款',
      privacy: '隐私政策',
    },
  },
};