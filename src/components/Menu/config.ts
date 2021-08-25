import { MenuEntry } from 'moonwalkerswap-uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://swaphome.moonwalker.network',
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
    href: 'https://swaphome.moonwalker.network/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://swaphome.moonwalker.network/pools',
  },


  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Overview',
        href: 'https://info.moonwalker.network',
      },
      {
        label: 'Tokens',
        href: 'https://info.moonwalker.network/tokens',
      },
      {
        label: 'Pairs',
        href: 'https://info.moonwalker.network/pairs',
      },
      {
        label: 'Accounts',
        href: 'https://info.moonwalker.network/accounts',
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
