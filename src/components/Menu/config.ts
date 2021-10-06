import { MenuEntry } from 'polygon-moonwalkerswap-uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://polygon-home.moonwalker.network',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://polygon-home.moonwalker.network/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://polygon-home.moonwalker.network/pools',
  },


  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Overview',
        href: 'https://polygon-info.moonwalker.network',
      },
      {
        label: 'Tokens',
        href: 'https://polygon-info.moonwalker.network/tokens',
      },
      {
        label: 'Pairs',
        href: 'https://polygon-info.moonwalker.network/pairs',
      },
      {
        label: 'Accounts',
        href: 'https://polygon-info.moonwalker.network/accounts',
      },
    ],
  },

  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      // {
      //   label: 'Voting',
      //   href: '#',
      // },
      {
        label: 'Github',
        href: 'https://github.com/MoonWalkerJim',
      },
      {
        label: 'Docs',
        href: 'https://docs.moonwalker.network',
      },
      {
        label: 'Blog',
        href: 'https://moonastrojim.medium.com/',
      },
    ],
  },
]

export default config
