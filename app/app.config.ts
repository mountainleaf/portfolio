export default defineAppConfig({
  global: {
    picture: {
      // TODO(Tianjiao): replace with your own avatar (light + dark variants).
      dark: 'https://avatars.githubusercontent.com/u/201182741',
      light: 'https://avatars.githubusercontent.com/u/201182741',
      alt: 'Tianjiao Yan\'s avatar'
    },
    // TODO(Tianjiao): set your real contact email below.
    email: 'tianjiao.yan@stu.pku.edu.cn',
    // The "available" badge in the Hero links here. mailto: works well for students.
    meetingLink: 'mailto:tianjiao.yan@stu.pku.edu.cn',
    available: true
  },
  ui: {
    colors: {
      primary: 'blue',
      neutral: 'neutral'
    },
    pageHero: {
      slots: {
        container: 'py-18 sm:py-24 lg:py-32',
        title: 'mx-auto max-w-xl text-pretty text-3xl sm:text-4xl lg:text-5xl',
        description: 'mt-2 text-md mx-auto max-w-2xl text-pretty sm:text-md text-muted'
      }
    }
  },
  footer: {
    credits: `© ${new Date().getFullYear()} Tianjiao Yan · Built with caffeine and curiosity in Beijing`,
    colorMode: false,
    links: [
      {
        'icon': 'i-simple-icons-github',
        // TODO(Tianjiao): replace with your real GitHub username.
        'to': 'https://github.com/mountainleaf',
        'target': '_blank',
        'aria-label': 'GitHub Profile'
      },
      {
        'icon': 'i-lucide-mail',
        // TODO(Tianjiao): replace with your real email.
        'to': 'mailto:tianjiao.yan@stu.pku.edu.cn',
        'aria-label': 'Email'
      }
    ]
  }
})
