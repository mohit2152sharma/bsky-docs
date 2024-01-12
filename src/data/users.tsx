
import {sortBy} from '@site/src/utils/jsUtils';

export type TagType =
  // DO NOT USE THIS TAG: we choose sites to add to favorites
  | 'favorite'
  | 'opensource' // link to source code required
  | 'client'
  | 'CLI'
  | 'bridge'
  | 'customfeed'
  | 'stats'
  | 'domains'
  | 'firehose'
  | 'protocol'   // Protocol implementations
  | 'tutorial'
  | 'othertools';

const Users: User[] = [
  {
    title: 'Japanese atproto docs',
    description: 'Japanese documentation for atproto',
    preview: require('./showcase/example-1.png'), // Placeholder image
    website: 'https://github.com/encrypteduse/atproto-website-docs-jp',
    source: 'https://github.com/encrypteduse/atproto-website-docs-jp',
    tags: ['tutorial'],
  },
  {
    title: 'TypeScript/Node atproto starter kit',
    description: 'TypeScript/Node template for atproto',
    preview: require('./showcase/example-1.png'), // Placeholder image
    website: 'https://github.com/aliceisjustplaying/atproto-starter-kit',
    author: 'https://bsky.app/profile/did:plc:by3jhwdqgbtrcc7q4tkkv3cf',
    tags: ['tutorial'],
  },
  {
    title: 'Bluesky bot using ATProto and OpenAI API',
    description: 'Guide on building a Bluesky bot with ATProto and OpenAI API',
    preview: require('./showcase/example-1.png'), // Placeholder image
    website: 'https://ashevat.medium.com/how-to-build-a-bluesky-bot-using-atproto-and-openai-api-77a26a154b',
    author: 'https://bsky.app/profile/did:plc:ua6usdc4hzvzjsokoenba4zt',
    tags: ['tutorial'],
  },
  {
    title: 'Bluesky bot tutorial',
    description: 'Tutorial for creating a Bluesky emoji bot',
    preview: require('./showcase/example-1.png'), // Placeholder image
    website: 'https://github.com/emilyliu7321/bluesky-emoji-bot/blob/main/TUTORIAL.md',
    author: 'https://bsky.app/profile/did:plc:vjug55kidv6sye7ykr5faxxn',
    tags: ['tutorial'],
  },
  {
    title: 'Getting started with #atdev',
    description: 'Introductory guide to ATProto development',
    preview: require('./showcase/example-1.png'), // Placeholder image
    website: 'https://graysky.app/blog/2023-10-17-getting-started-atproto',
    author: 'https://bsky.app/profile/did:plc:p2cp5gopk7mgjegy6wadk3ep',
    tags: ['tutorial'],
  },
  {
    title: 'atproto',
    description: 'This is the leading protocol implementation, developed by Bluesky PBC. TypeScript.',
    preview: require('./showcase/example-1.png'),
    website: 'https://github.com/bluesky-social/atproto',
    tags: ['protocol'],
  },
  {
    title: 'indigo',
    description: 'AT Protocol implementation in Go, developed by Bluesky, PBC.',
    preview: require('./showcase/example-1.png'),
    website: 'https://github.com/bluesky-social/indigo',
    tags: ['protocol'],
  },
  {
    title: 'atproto (Python)',
    description: 'AT Protocol implementation in Python',
    preview: require('./showcase/example-1.png'),
    website: 'https://github.com/MarshalX/atproto',
    tags: ['protocol'],
  },
  {
    title: 'lexrpc',
    description: 'AT Protocol implementation in Python',
    preview: require('./showcase/example-1.png'),
    website: 'https://github.com/snarfed/lexrpc',
    tags: ['protocol'],
  },
  {
    title: 'atprototools',
    description: 'AT Protocol implementation in Python',
    preview: require('./showcase/example-1.png'),
    website: 'https://github.com/ianklatzco/atprototools',
    tags: ['protocol'],
  },
  {
    title: 'Chitose',
    description: 'AT Protocol implementation in Python',
    preview: require('./showcase/example-1.png'),
    website: 'https://github.com/mnogu/chitose',
    tags: ['protocol'],
  },
  {
    title: 'arroba',
    description: 'PDS implementation with MST, commit repo, diff and `com.atproto.sync` XRPC methods in Python',
    preview: require('./showcase/example-1.png'),
    website: 'https://github.com/snarfed/arroba',
    tags: ['protocol'],
  },
  {
    title: 'picopds',
    description: 'A bare-minimum PDS implementation with just enough to federate with the sandbox network in Python.',
    preview: require('./showcase/example-1.png'),
    website: 'https://github.com/DavidBuchanan314/picopds',
    tags: ['protocol'],
  },
  {
    title: 'blue-pyinthe-sky',
    description: 'AT Protocol implementation in Python',
    preview: require('./showcase/example-1.png'),
    website: 'https://github.com/robcerda/blue-pyinthe-sky',
    tags: ['protocol'],
  },
  {
    title: 'gokyuzu',
    description: 'AT Protocol implementation in Python',
    preview: require('./showcase/example-1.png'),
    website: 'https://github.com/kiliczsh/gokyuzu',
    tags: ['protocol'],
  },
  {
    title: 'atproto (Dart)',
    description: 'AT Protocol implementation in Dart',
    preview: require('./showcase/example-1.png'),
    website: 'https://github.com/myConsciousness/atproto.dart/tree/main/packages',
    tags: ['protocol'],
  },
  {
    title: 'FishyFlip (C#)',
    description: 'AT Protocol implementation in C#',
    preview: require('./showcase/example-1.png'),
    website: 'https://github.com/drasticactions/FishyFlip',
    tags: ['protocol'],
  },
  {
    title: 'bsky4j (Java)',
    description: 'AT Protocol implementation in Java',
    preview: require('./showcase/example-1.png'),
    website: 'https://github.com/uakihir0/bsky4j',
    tags: ['protocol'],
  },
  {
    title: 'socialweb/atproto-lexicon (PHP)',
    description: 'Parses and resolves Lexicon schemas in PHP; useful for code generation',
    preview: require('./showcase/example-1.png'),
    website: 'https://github.com/socialweb-php/atproto-lexicon',
    tags: ['protocol'],
  },
  {
    title: 'phluesky (PHP)',
    description: 'A small library for posting to Bluesky in PHP',
    preview: require('./showcase/example-1.png'),
    website: 'https://github.com/potibm/phluesky',
    tags: ['protocol'],
  },
  {
    title: 'Tokimeki',
    description: 'Web client for Bluesky',
    preview: require('./showcase/example-1.png'),
    website: 'https://tokimekibluesky.vercel.app/',
    author: 'https://bsky.app/profile/did:plc:hiptcrt4k63szzz4ty3dhwcp',
    tags: ['client'],
  },
  {
    title: 'Klearsky',
    description: 'Web client for Bluesky',
    preview: require('./showcase/example-1.png'),
    website: 'https://klearsky.pages.dev/',
    author: 'https://bsky.app/profile/did:plc:ilxxgyz7oz7mysber4omeqrg',
    tags: ['client'],
  },
  {
    title: 'Laika',
    description: 'Web client for Bluesky',
    preview: require('./showcase/example-1.png'),
    website: 'https://laika-bluesky.web.app/',
    author: 'https://bsky.app/profile/did:plc:tr5cijtwcpl2dqrtmjsmmcow',
    tags: ['client'],
  },
  {
    title: 'Skylight',
    description: 'Web client for Bluesky',
    preview: require('./showcase/example-1.png'),
    website: 'https://penpenpng.github.io/skylight',
    author: 'https://bsky.app/profile/did:plc:ahj2yuo63gaxyhbgn5ai6jt2',
    tags: ['client'],
  },
  {
    title: 'The Blue',
    description: 'Web client for Bluesky',
    preview: require('./showcase/example-1.png'),
    website: 'https://the-blue.shino3.net',
    author: 'https://bsky.app/profile/did:plc:rpwpuzu2yyiuufm3232d7pm5',
    tags: ['client'],
  },
  {
    title: 'Ucho-ten',
    description: 'Web client for Bluesky',
    preview: require('./showcase/example-1.png'),
    website: 'https://ucho-ten.net',
    author: 'https://bsky.app/profile/did:plc:txandrhc7afdozk6a2itgltm',
    tags: ['client'],
  },
  {
    title: 'Kite🪁',
    description: 'Web client for Bluesky',
    preview: require('./showcase/example-1.png'),
    website: 'https://kite.black',
    author: 'https://bsky.app/profile/did:plc:cqednx7rqstpsgdgec4byd6g',
    tags: ['client'],
  },
  {
    title: 'Sunrise',
    description: 'Web client for Bluesky',
    preview: require('./showcase/example-1.png'),
    website: 'https://sunrise.li/auth/login',
    author: 'https://bsky.app/profile/did:plc:gtbohpin5op22ispn4gdnt7n',
    tags: ['client'],
  },
  {
    title: 'Blue Wrapper',
    description: 'Web client for Bluesky',
    preview: require('./showcase/example-1.png'),
    website: 'https://blue.amazingca.dev',
    author: 'https://bsky.app/profile/did:plc:e2nwnarqo7kdbt7ngr3gejp6',
    tags: ['client'],
  },
  {
    title: 'Connectsky - Extension based AT Proto Client',
    description: 'Web client for Bluesky',
    preview: require('./showcase/example-1.png'),
    website: 'https://chrome.google.com/webstore/detail/connectsky-an-at-proto-cl/dfjlfmdhkgcpendpfflnlaedfgaoiaed/related',
    author: 'https://bsky.app/profile/did:plc:5t2x7mmh4ofspj7apwpgif5l',
    tags: ['client'],
  },
  {
    title: 'SkyDeck',
    description: 'Web client for Bluesky',
    preview: require('./showcase/example-1.png'),
    website: 'https://skydeck.social',
    author: 'https://bsky.app/profile/did:plc:hnbglrwshrdspimiliyoohhu',
    tags: ['client'],
  },
  {
    title: 'SkyFeed',
    description: 'Web client for Bluesky',
    preview: require('./showcase/example-1.png'),
    website: 'https://skyfeed.app',
    author: 'https://bsky.app/profile/did:plc:odo2zkpujsgcxtz7ph24djkj',
    tags: ['client', 'favorite', 'opensource', 'customfeed'],
  },
  {
    title: 'redocean',
    description: 'Web client for Bluesky',
    preview: require('./showcase/example-1.png'),
    website: 'https://redocean.forza7.org/',
    author: 'https://bsky.app/profile/did:plc:au6x2h2niz27male2krpwmzz',
    tags: ['client'],
  },
  {
    title: 'Langit',
    description: 'Web client for Bluesky',
    preview: require('./showcase/example-1.png'),
    website: 'https://langit.pages.dev/',
    author: 'https://bsky.app/profile/did:plc:qezk54orevt3dtm4ijcyadnq',
    tags: ['client'],
  },
  {
    title: 'vSky',
    description: 'Web client for Bluesky',
    preview: require('./showcase/example-1.png'),
    website: 'https://vsky.social',
    author: 'https://bsky.app/profile/did:plc:ubz4oedvsb7dsuncqi5jb7o2',
    tags: ['client'],
  },
  {
    title: 'Skylight Bluesky Style',
    description: 'Web client for Bluesky',
    preview: require('./showcase/example-1.png'),
    website: 'https://skylight-bluesky-style.vercel.app/#/',
    author: 'https://bsky.app/profile/did:plc:fporki4626psbdnxzeh7lhg5',
    tags: ['client'],
  },
  {
    title: 'deck.blue',
    description: 'Web client for Bluesky',
    preview: require('./showcase/example-1.png'),
    website: 'https://deck.blue',
    author: 'https://bsky.app/profile/did:plc:w342borqxtyo2pul67ec2pwt',
    tags: ['client', 'favorite'],
  },
  {
    title: 'Fedica',
    description: 'Web client for Bluesky',
    preview: require('./showcase/example-1.png'),
    website: 'https://fedica.com/social-media/bluesky',
    author: 'https://bsky.app/profile/did:plc:n7nimjfhrwsrgsuothysn2h6',
    tags: ['client'],
  },
  {
    title: 'Subium',
    description: 'Web client for Bluesky',
    preview: require('./showcase/example-1.png'),
    website: 'https://subium.com',
    author: 'https://bsky.app/profile/did:plc:rq6jsdmsptn4m7tfz7cd7nyv',
    tags: ['client'],
  },
  {
    title: 'Graysky',
    description: 'iOS and Android client for Bluesky',
    preview: require('./showcase/example-1.png'),
    website: 'https://graysky.app/',
    author: 'https://bsky.app/profile/did:plc:p2cp5gopk7mgjegy6wadk3ep',
    tags: ['client', 'favorite'],
  },
  {
    title: 'Yup',
    description: 'iOS client for Bluesky, an app to cross-post to Bluesky and other social apps',
    preview: require('./showcase/example-1.png'),
    website: 'https://yup.io/',
    tags: ['client'],
  },
  {
    title: 'Skeets',
    description: 'iOS client for Bluesky, an app that offers bookmarks, drafts, mute words, etc.',
    preview: require('./showcase/example-1.png'),
    website: 'https://bsky.app/profile/skeetsapp.com',
    author: 'https://bsky.app/profile/did:plc:ituoear7k6qx3smjfoxhufm4',
    tags: ['client'],
  },
  {
    title: 'Seiun',
    description: 'Android client for Bluesky',
    preview: require('./showcase/example-1.png'),
    website: 'https://github.com/akiomik/seiun',
    author: 'https://bsky.app/profile/did:plc:j5cxpczcvzajlxhfuq7abivp',
    tags: ['client'],
  },
  {
    title: 'Ozone',
    description: 'Android client for Bluesky',
    preview: require('./showcase/example-1.png'),
    website: 'https://github.com/christiandeange/ozone',
    author: 'https://bsky.app/profile/did:plc:soed46hcvg3l24tshb352cy6',
    tags: ['client'],
  },
  {
    title: 'Greenland',
    description: 'Android client for Bluesky',
    preview: require('./showcase/example-1.png'),
    website: 'https://github.com/itsWindows11/Greenland',
    author: 'https://bsky.app/profile/did:plc:li5ejsts35x45ozaqlqmewso',
    tags: ['client'],
  },
  {
    title: 'Bluesky for Raycast',
    description: 'macOS client for Bluesky',
    preview: require('./showcase/example-1.png'),
    website: 'https://www.raycast.com/dharamkapila/bluesky',
    author: 'https://bsky.app/profile/did:plc:qqoncpemipyncukz3esxjcbg',
    tags: ['client'],
  },
  {
    title: 'swiftsky',
    description: 'macOS client for Bluesky',
    preview: require('./showcase/example-1.png'),
    website: 'https://github.com/rmcan/swiftsky',
    author: 'https://bsky.app/profile/did:plc:oaerst6hznvwkeqtar5dtqry',
    tags: ['client'],
  },
  {
    title: 'gosky (Golang)',
    description: 'CLI client for Bluesky, developed by Bluesky, PBC',
    preview: require('./showcase/example-1.png'),
    website: 'https://github.com/bluesky-social/indigo/tree/main/cmd/gosky',
    source: 'https://github.com/bluesky-social/indigo/tree/main/cmd/gosky',
    tags: ['client'],
  },
  {
    title: 'adenosine-cli (Rust)',
    description: 'CLI client for Bluesky',
    preview: require('./showcase/example-1.png'),
    website: 'https://gitlab.com/bnewbold/adenosine/-/blob/main/adenosine-cli/README.md',
    author: 'https://bsky.app/profile/did:plc:44ybard66vv44zksje25o7dz',
    tags: ['client'],
  },
  {
    title: 'bsky (Golang)',
    description: 'CLI client for Bluesky',
    preview: require('./showcase/example-1.png'),
    website: 'https://github.com/mattn/bsky',
    author: 'https://bsky.app/profile/did:plc:ituhatvv5pyz4rwsj4hfrslh',
    tags: ['client'],
  },
  {
    title: 'atr (Rust)',
    description: 'CLI client for Bluesky',
    preview: require('./showcase/example-1.png'),
    website: 'https://github.com/syui/atr',
    author: 'https://bsky.app/profile/did:plc:uqzpqmrjnptsxezjx4xuh2mn',
    tags: ['client'],
  },
  {
    title: 'bluesky_cli (Dart)',
    description: 'CLI client for Bluesky',
    preview: require('./showcase/example-1.png'),
    website: 'https://github.com/myConsciousness/atproto.dart/tree/main/packages/bluesky_cli',
    author: 'https://bsky.app/profile/did:plc:iijrtk7ocored6zuziwmqq3c',
    tags: ['client'],
  },
  {
    title: 'blue-sky-cli (Typescript)',
    description: 'CLI client for Bluesky',
    preview: require('./showcase/example-1.png'),
    website: 'https://github.com/wesbos/blue-sky-cli',
    author: 'https://bsky.app/profile/did:plc:etdjdgnly5tz5l5xdd4jq76d',
    tags: ['client'],
  },
  {
    title: 'SkyBridge',
    description: 'A bridge to use Mastodon apps with Bluesky',
    preview: require('./showcase/example-1.png'),
    website: 'https://github.com/videah/skybridge',
    author: 'https://bsky.app/profile/did:plc:inze6wrmsm7pjl7yta3oig77',
    tags: ['bridge'],
  },
  {
    title: 'Bluestream',
    description: 'RSS feed generator for Bluesky',
    preview: require('./showcase/example-1.png'),
    website: 'https://bluestream.deno.dev/',
    author: 'https://bsky.app/profile/did:plc:okalufxun5rpqzdrwf5bpu3d',
    tags: ['bridge'],
  },
  {
    title: 'Twitter-to-Bsky',
    description: 'Tool to import your Twitter archive to Bluesky',
    preview: require('./showcase/example-1.png'),
    website: 'https://github.com/ianklatzco/twitter-to-bsky',
    author: 'https://bsky.app/profile/did:plc:o2hywbrivbyxugiukoexum57',
    tags: ['bridge'],
  },
  {
    title: 'bluesky-post',
    description: 'A tool to post from GitHub Actions to Bluesky',
    preview: require('./showcase/example-1.png'),
    website: 'https://github.com/myConsciousness/atproto.dart/tree/main/packages/bluesky_post',
    author: 'https://bsky.app/profile/did:plc:iijrtk7ocored6zuziwmqq3c',
    tags: ['bridge'],
  },
  {
    title: 'granary',
    description: 'Converts `app.bsky` objects to/from various formats including ActivityStreams, RSS, Atom, HTML',
    preview: require('./showcase/example-1.png'),
    website: 'https://granary.io/',
    author: 'https://bsky.app/profile/did:plc:fdme4gb7mu7zrie7peay7tst',
    tags: ['bridge'],
  },
  {
    title: 'Sky Follower Bridge',
    description: 'Find and follow Twitter followers on Bluesky instantly',
    preview: require('./showcase/example-1.png'),
    website: 'https://github.com/kawamataryo/sky-follower-bridge',
    author: 'https://bsky.app/profile/did:plc:hcp53er6pefwijpdceo5x4bp',
    tags: ['bridge'],
  },
  {
    title: 'bluesky-sms-service',
    description: 'Allows posting to Bluesky via SMS',
    preview: require('./showcase/example-1.png'),
    website: 'https://github.com/kylefmohr/bluesky-sms-service',
    author: 'https://bsky.app/profile/did:plc:os4uvzzv76z34z6qhgylfnqm',
    tags: ['bridge'],
  },
  {
    title: 'Goodfeeds',
    description: 'A tool to search custom feeds',
    preview: require('./showcase/example-1.png'),
    website: 'https://goodfeeds.co/',
    author: 'https://bsky.app/profile/did:plc:vc7f4oafdgxsihk4cry2xpze',
    tags: ['customfeed'],
  },
  {
    title: 'Skyline',
    description: 'Tool to create your own algorithmic feeds',
    preview: require('./showcase/example-1.png'),
    website: 'https://skyline.gay/',
    author: 'https://bsky.app/profile/did:plc:g74nxoyriqoo7jyclzlqkbj2',
    tags: ['customfeed'],
  },
  {
    title: "Bossett's Custom Feeds",
    description: "Fork of official generator for What's Science 🧪 feed & to easily host multiple algorithms with more advanced matching",
    preview: require('./showcase/example-1.png'),
    website: 'https://github.com/Bossett/bsky-feeds',
    author: 'https://bsky.app/profile/did:plc:jfhpnnst6flqway4eaeqzj2a',
    tags: ['customfeed'],
  },
  {
    title: 'blue_factory',
    description: 'A Ruby implementation of a feed generator',
    preview: require('./showcase/example-1.png'),
    website: 'https://github.com/mackuba/blue_factory',
    author: 'https://bsky.app/profile/did:plc:oio4hkxaop4ao4wz2pp3f4cr',
    tags: ['customfeed'],
  },
  {
    title: 'bluesky-feeds-rb',
    description: 'A complete example of a custom feed service in Ruby',
    preview: require('./showcase/example-1.png'),
    website: 'https://github.com/mackuba/bluesky-feeds-rb',
    author: 'https://bsky.app/profile/did:plc:oio4hkxaop4ao4wz2pp3f4cr',
    tags: ['customfeed'],
  },
  {
    title: 'Bluesky Social Feeds',
    description: 'A tool to search and build custom feeds without code or regex',
    preview: require('./showcase/example-1.png'),
    website: 'https://blueskyfeeds.com',
    author: 'https://bsky.app/profile/did:plc:eubjsqnf5edgvcc6zuoyixhw',
    tags: ['customfeed'],
  },
  {
    title: 'ATScan',
    description: 'A tool for analyzing AT Protocol usage',
    preview: require('./showcase/example-1.png'),
    website: 'https://github.com/atscan/atscan',
    author: 'https://bsky.app/profile/did:plc:524tuhdhh3m7li5gycdn6boe',
    tags: ['stats'],
  },
  {
    title: 'Bluesky social graph generator',
    description: 'Generates a social graph for Bluesky users',
    preview: require('./showcase/example-1.png'),
    website: 'https://bsky.jazco.dev/',
    author: 'https://bsky.app/profile/did:plc:q6gjnaw2blty4crticxkmujt',
    tags: ['stats'],
  },
  {
    title: 'Bluesky stats',
    description: 'Provides statistics for the Bluesky social network',
    preview: require('./showcase/example-1.png'),
    website: 'https://bsky.jazco.dev/stats',
    author: 'https://bsky.app/profile/did:plc:q6gjnaw2blty4crticxkmujt',
    tags: ['stats'],
  },
  {
    title: 'Bluesky user growth',
    description: 'Tracks and visualizes user growth on Bluesky',
    preview: require('./showcase/example-1.png'),
    website: 'https://vqv.app/stats/chart',
    author: 'https://bsky.app/profile/did:plc:ui7jfx3hdkfb4qr4ncfbqgvv',
    tags: ['stats'],
  },
  {
    title: 'SkyFeed Builder Feed Stats',
    description: 'Provides statistics for feeds built using Skyfeed Builder',
    preview: require('./showcase/example-1.png'),
    website: 'https://stats.skyfeed.me/',
    author: 'https://bsky.app/profile/did:plc:odo2zkpujsgcxtz7ph24djkj',
    tags: ['stats'],
  },
  {
    title: 'Skyname',
    description: 'Register a free unique username for your Bluesky account',
    preview: require('./showcase/example-1.png'),
    website: 'https://skyna.me/',
    author: 'https://bsky.app/profile/did:plc:7qw3ldjppmwmtjoak3egctdb',
    tags: ['domains'],
  },
  {
    title: 'Open Handles',
    description: 'An app to let others create a handle with your domains',
    preview: require('./showcase/example-1.png'),
    website: 'https://github.com/SlickDomique/open-handles',
    author: 'https://bsky.app/profile/did:plc:7bwr7mioqql34n2mrqwqypbz',
    tags: ['domains'],
  },
  {
    title: 'swifties.social',
    description: 'Claim a swifties.social handle',
    preview: require('./showcase/example-1.png'),
    website: 'https://swifties.social/',
    author: 'https://bsky.app/profile/did:plc:p2cp5gopk7mgjegy6wadk3ep',
    tags: ['domains'],
  },
  {
    title: 'Firesky',
    description: 'Real-time stream of every Bluesky post',
    preview: require('./showcase/example-1.png'),
    website: 'https://firesky.tv',
    author: 'https://bsky.app/profile/did:plc:mceyt3qjswifxtikqqwvnnge',
    tags: ['firehose', 'favorite'],
  },
  {
    title: 'Blue skies ahead',
    description: 'View a feed of Bluesky posts',
    preview: require('./showcase/example-1.png'),
    website: 'https://blue-skies-ahead.glitch.me/',
    author: 'https://bsky.app/profile/did:plc:sqhiuhi54wjzwsglrduhwxm6',
    tags: ['firehose'],
  },
  {
    title: 'atproto-firehose',
    description: 'NodeJS/Typescript library for accessing AT Protocol Event Stream (aka firehose) and a CLI for streaming Bluesky Social events',
    preview: require('./showcase/example-1.png'),
    website: 'https://github.com/kcchu/atproto-firehose',
    author: 'https://bsky.app/profile/did:plc:ocko5cww67whp5lejhh57zdd',
    tags: ['firehose'],
  },
  {
    title: 'blueskyfirehose',
    description: 'View a firehose of all bsky.social posts',
    preview: require('./showcase/example-1.png'),
    website: 'https://github.com/CharlesDardaman/blueskyfirehose',
    author: 'https://bsky.app/profile/did:plc:ibuqevx5au345anhlfeneo2m',
    tags: ['firehose'],
  },
  {
    title: 'Skyfall',
    description: 'A Ruby gem for streaming events from the firehose',
    preview: require('./showcase/example-1.png'),
    website: 'https://github.com/mackuba/skyfall',
    author: 'https://bsky.app/profile/did:plc:oio4hkxaop4ao4wz2pp3f4cr',
    tags: ['firehose'],
  },
  {
    title: 'Skylink Chrome Extension',
    description: 'Chrome extension to detect DIDs while browsing the web',
    preview: require('./showcase/example-1.png'),
    website: 'https://skylinkchrome.com',
    author: 'https://bsky.app/profile/did:plc:f55kfczvcsjlaota4ep2xvhx',
    tags: ['othertools', 'favorite'],
  },
  {
    title: 'Skylink Firefox Extension',
    description: 'Firefox extension to detect DIDs while browsing the web',
    preview: require('./showcase/example-1.png'),
    website: 'https://skylinkff.com/',
    author: 'https://bsky.app/profile/did:plc:f55kfczvcsjlaota4ep2xvhx',
    tags: ['othertools'],
  },
  {
    title: 'Skycle.app',
    description: 'Visualize your circle of friends on Bluesky',
    preview: require('./showcase/example-1.png'),
    website: 'https://skycle.app',
    author: 'https://bsky.app/profile/pirmax.fr',
    tags: ['othertools'],
  },
  {
    title: 'Glamorous Toolkit for AT Protocol',
    description: 'A moldable development environment for AT Protocol',
    preview: require('./showcase/example-1.png'),
    website: 'https://github.com/feenkcom/gt4atproto',
    author: null,
    tags: ['othertools'],
  },
  {
    title: 'Bluesky post heatmap generator',
    description: 'Generates a heatmap of Bluesky posts',
    preview: require('./showcase/example-1.png'),
    website: 'https://bluesky-heatmap.fly.dev/',
    author: 'https://bsky.app/profile/did:plc:by3jhwdqgbtrcc7q4tkkv3cf',
    tags: ['othertools', 'favorite'],
  },
  {
    title: 'Add Bluesky feed embeds',
    description: 'Tool to embed Bluesky feeds',
    preview: require('./showcase/example-1.png'),
    website: 'https://bsky.app/profile/did:plc:ijpidtwscybqhs5fxyzjojmu/post/3juerzwcl4424',
    author: 'https://bsky.app/profile/did:plc:ijpidtwscybqhs5fxyzjojmu',
    tags: ['othertools'],
  },
  {
    title: 'bsky.link',
    description: 'Generate embeddable link previews for Bluesky posts',
    preview: require('./showcase/example-1.png'),
    website: 'https://bsky.link/',
    author: 'https://bsky.app/profile/did:plc:6wwzaz5n4ordx762esmflyhx',
    tags: ['othertools'],
  },
  {
    title: 'Bluesky Overhaul',
    description: 'Browser extension that improves UX on the web app',
    preview: require('./showcase/example-1.png'),
    website: 'https://github.com/xenohunter/bluesky-overhaul',
    author: 'https://bsky.app/profile/did:plc:ihbptowbt4tkcjqespanfbez',
    tags: ['othertools'],
  },
  {
    title: 'atp tooling',
    description: 'Tools for caching and unfollowing repos and users on Bluesky',
    preview: require('./showcase/example-1.png'),
    website: 'https://blue.amazingca.dev/tools',
    author: 'https://bsky.app/profile/did:plc:e2nwnarqo7kdbt7ngr3gejp6',
    tags: ['othertools'],
  },
  {
    title: 'bluesky-esphome',
    description: 'ESP32 configuration to display Bluesky data',
    preview: require('./showcase/example-1.png'),
    website: 'https://github.com/softplus/bluesky_esphome',
    author: 'https://bsky.app/profile/did:plc:4ee6oesrsbtmuln4gqsqf6fp',
    tags: ['othertools'],
  },
  {
    title: 'Airspace',
    description: 'Social Blade for Bluesky showing history of follows/followers/posts count for any user',
    preview: require('./showcase/example-1.png'),
    website: 'https://bsky-airspace.onrender.com/',
    author: 'https://bsky.app/profile/did:plc:gzs37etm32zvsznn775hy35w',
    tags: ['othertools'],
  },
  {
    title: 'Skythread',
    description: 'A tool for reading threads in a tree layout',
    preview: require('./showcase/example-1.png'),
    website: 'https://blue.mackuba.eu/skythread/',
    author: 'https://bsky.app/profile/did:plc:oio4hkxaop4ao4wz2pp3f4cr',
    tags: ['othertools'],
  },
  {
    title: 'SkyPicker',
    description: 'A tool to do raffles in Bluesky',
    preview: require('./showcase/example-1.png'),
    website: 'https://skypicker.site/',
    author: 'https://bsky.app/profile/did:plc:uorsid6pyxlcoggl3b65mzfy',
    tags: ['othertools'],
  },
  {
    title: 'Skircle',
    description: 'Visualize Bluesky Interaction Circles',
    preview: require('./showcase/example-1.png'),
    website: 'https://skircle.me',
    author: 'https://bsky.app/profile/did:plc:7neczgqjegyixcjlr4dlnkf5',
    tags: ['othertools'],
  },
  {
    title: 'Neznam Atproto share',
    description: 'WordPress plugin to automatically share posts from WordPress to timeline',
    preview: require('./showcase/example-1.png'),
    website: 'https://github.com/ne-znam/neznam-atproto-share',
    author: 'https://bsky.app/profile/did:plc:diud5hvgw7ssqvhwm5zamiwe',
    tags: ['othertools'],
  },
  {
    title: 'SkySweeper',
    description: 'Service which automatically deletes your old skeets from Bluesky',
    preview: require('./showcase/example-1.png'),
    website: 'https://github.com/pojntfx/skysweeper',
    author: 'https://bsky.app/profile/did:plc:ijpidtwscybqhs5fxyzjojmu',
    tags: ['othertools'],
  },
]

export type User = {
  title: string;
  description: string;
  preview: string | null; // null = use our serverless screenshot service
  website: string;
  source?: string | null;
  author?: string | null;
  tags: TagType[];
};

export type Tag = {
  label: string;
  description: string;
  color: string;
};

export const Tags: {[type in TagType]: Tag} = {
  favorite: {
    label: 'Favorite',
    description:'Staff picks',
    color: '#e9669e',
  },
  opensource: {
    label: 'Open-Source',
    description: 'Open-Source Bluesky projects',
    color: '#39ca30',
  },
  client: {
    label: 'Client',
    description: 'Alternative Bluesky clients',
    color: '#008080',
  },
  CLI: {
    label: 'CLI',
    description: 'Command Line Interface tools for Bluesky',
    color: '#555555',
  },
  bridge: {
    label: 'Bridge',
    description: 'Bridging tools between Bluesky and other platforms',
    color: '#1a73e8',
  },
  customfeed: {
    label: 'Custom Feed',
    description: 'Tools for customizing Bluesky feeds',
    color: '#fbbc05',
  },
  stats: {
    label: 'Stats',
    description: 'Statistics and analytics tools for Bluesky',
    color: '#34a853',
  },
  domains: {
    label: 'Domains',
    description: 'Domain management tools for Bluesky',
    color: '#ea4335',
  },
  firehose: {
    label: 'Firehose',
    description: 'Tools for manipulating the Bluesky firehose',
    color: '#4285f4',
  },
  protocol: {
    label: 'Protocol',
    description: 'Protocol implementations for Bluesky',
    color: '#0f9d58',
  },
  tutorial: {
    label: 'Tutorial',
    description: 'Resources and tutorials',
    color: '#f4b400',
  },
  othertools: {
    label: 'Other Tools',
    description: 'Miscellaneous tools for Bluesky',
    color: '#e8eaed',
  },
};

export const TagList = Object.keys(Tags) as TagType[];
function sortUsers() {
  let result = Users;
  // Sort by site name
  result = sortBy(result, (user) => user.title.toLowerCase());
  // Sort by favorite tag, favorites first
  result = sortBy(result, (user) => !user.tags.includes('favorite'));
  return result;
}

export const sortedUsers = sortUsers();

// /**
//  * Copyright (c) Facebook, Inc. and its affiliates.
//  *
//  * This source code is licensed under the MIT license found in the
//  * LICENSE file in the root directory of this source tree.
//  */

// import React from 'react';
// import {difference, sortBy} from '../utils/jsUtils';
// import {
//   SiJavascript,
//   SiTypescript,
//   SiReact,
//   SiSvelte,
//   SiPython,
//   SiDjango,
//   SiGo,
//   SiDocker,
//   SiCelery,
//   SiRedis,
//   SiAmazonaws,
//   SiFlutter,
//   SiGraphql,
//   SiLine,
//   SiPokemon,
//   SiPostgresql,
//   SiMysql,
//   SiWebpack
// } from 'react-icons/si';



// /*
//  * ADD YOUR SITE TO THE DOCUSAURUS SHOWCASE:
//  *
//  * Requirements for adding your site to our showcase:
//  * - It is a production-ready site with real content and decent customizations (different from the init templates)
//  * - It is NOT a work-in-progress with empty pages
//  * - It has a stable domain name (a Netlify/Vercel deploy preview is not allowed)
//  *
//  * Instructions:
//  * - Add your site in the json array below
//  * - Add a local image preview (decent screenshot of your Docusaurus site)
//  * - Use relevant tags to qualify your site (read the tag descriptions bellow)
//  * - The image MUST be added to the GitHub repository, and use `require("image")`
//  * - Open a PR and check for reported CI errors
//  *
//  * Example PR: https://github.com/facebook/docusaurus/pull/3976
//  *
//  * If you edit this file through the Github interface, you can:
//  * - Submit first your users.js edit PR
//  * - This will create a branch on your Docusaurus fork (usually "patch-1")
//  * - Go to https://github.com/<username>/docusaurus/tree/<branch>/website/src/data/showcase
//  * - Drag-and-drop an image here to add it to your existing PR
//  *
//  * Please help us maintain this showcase page data:
//  * - Update sites with wrong data
//  * - Ensure site tags remains correct over time
//  * - Remove sites not using Docusaurus anymore
//  * - Add missing Docusaurus sites (if the site owner agreed)
//  *
//  */

// export type Tag = {
//   label: string;
//   description: string;
//   icon: JSX.Element;
// };

// export type TagType =
//   | 'favorite'
//   | 'opensource'
//   | 'bot'
//   | 'client'
//   | 'feedgenerator'
//   ;

// export type User = {
//   title: string;
//   description: string;
//   preview: any;
//   website: string;
//   source: string | null;
//   tags: TagType[];
// };

// // LIST OF AVAILABLE TAGS
// // Available tags to assign to your site
// // Please choose widely, we'll remove unappropriate tags
// export const Tags: Record<TagType, Tag> = {
//   // For open-source sites, a link to the source code is required
//   opensource: {
//     label: 'Open-Source',
//     description: 'Open-Source Docusaurus sites can be useful for inspiration!',
//     icon: <>👨‍💻</>,
//   },
//   favorite: {
//     label: 'Favorite',
//     description: 'Favorite project',
//     icon: <>👨‍💻</>,
//   },
//   bot: {
//     label: 'Bot',
//     description: 'Bot',
//     icon: <>👨‍💻</>,
//   },
//   client: {
//     label: 'Client',
//     description: 'client',
//     icon: <>👨‍💻</>,
//   },
//   feedgenerator: {
//     label: 'Feed Generator',
//     description: 'feed generator',
//     icon: <>👨‍💻</>,
//   },
// };

// // Add your site to this list
// // prettier-ignore
// const Users: User[] = [
//   {
//     title: 'one',
//     description: 'description one',
//     preview: require('./showcase/7wate-wiki.png'),
//     website: 'https://timeline.line.me/user/_dVIuvfRKpnIF0fshFbeisWNMXSXo1yCFeUZWwFM',
//     source: 'https://github.com/pandawa-tech/arjuna',
//     tags: [
//       'opensource',
//     ],
//   },
//   {
//     title: 'Bima',
//     description: 'Algorithm Visualizer.',
//     preview: require('./showcase/7wate-wiki.png'),
//     website: 'https://bima.priambudi.fyi/',
//     source: 'https://github.com/pandawa-tech/bima',
//     tags: [
//       'opensource',
//       'bot'
//     ],
//   },
//   {
//     title: 'Pokédex',
//     description: 'Pokédex and catch Pokémon!',
//     preview: require('./showcase/7wate-wiki.png'),
//     website: 'https://pokedex.priambudi.fyi/',
//     source: 'https://github.com/priambudiLB/pokedex',
//     tags: [
//       'opensource',
//       'favorite'
//     ],
//   },
//   {
//     title: 'Mood Tracker',
//     description: 'Mood & Activity Tracker App.',
//     preview: require('./showcase/7wate-wiki.png'),
//     website: 'https://play.google.com/store/apps/details?id=id.ac.ui.cs.modi.ModiApp&hl=in&gl=US',
//     source: null,
//     tags: [
//       'client'
//     ],
//   }

//   /*
//   Pro Tip: add your site in alphabetical order.
//   Appending your site here (at the end) is more likely to produce Git conflicts.
//    */
// ];

// export const TagList = Object.keys(Tags) as TagType[];
// function sortUsers() {
//   let result = Users;
//   // Sort by site name
//   result = sortBy(result, (user) => user.title.toLowerCase());
//   return result;
// }

// export const sortedUsers = sortUsers();

// // Fail-fast on common errors
// function ensureUserValid(user: User) {
//   function checkFields() {
//     const keys = Object.keys(user);
//     const validKeys = [
//       'title',
//       'description',
//       'preview',
//       'website',
//       'source',
//       'tags',
//     ];
//     const unknownKeys = difference(keys, validKeys);
//     if (unknownKeys.length > 0) {
//       throw new Error(
//         `Site contains unknown attribute names=[${unknownKeys.join(',')}]`,
//       );
//     }
//   }

//   function checkTitle() {
//     if (!user.title) {
//       throw new Error('Site title is missing');
//     }
//   }

//   function checkDescription() {
//     if (!user.description) {
//       throw new Error('Site description is missing');
//     }
//   }

//   function checkWebsite() {
//     if (!user.website) {
//       throw new Error('Site website is missing');
//     }
//     const isHttpUrl =
//       user.website.startsWith('http://') || user.website.startsWith('https://');
//     if (!isHttpUrl) {
//       throw new Error(
//         `Site website does not look like a valid url: ${user.website}`,
//       );
//     }
//   }

//   function checkPreview() {
//     if (
//       !user.preview ||
//       (user.preview instanceof String &&
//         (user.preview.startsWith('http') || user.preview.startsWith('//')))
//     ) {
//       throw new Error(
//         `Site has bad image preview=[${user.preview}].\nThe image should be hosted on Docusaurus site, and not use remote HTTP or HTTPS URLs`,
//       );
//     }
//   }

//   function checkTags() {
//     if (
//       !user.tags ||
//       !(user.tags instanceof Array) ||
//       (user.tags as string[]).includes('')
//     ) {
//       throw new Error(`Bad showcase tags=[${JSON.stringify(user.tags)}]`);
//     }
//     const unknownTags = difference(user.tags, TagList);
//     if (unknownTags.length > 0) {
//       throw new Error(
//         `Unknown tags=[${unknownTags.join(
//           ',',
//         )}\nThe available tags are ${TagList.join(',')}`,
//       );
//     }
//   }

//   function checkOpenSource() {
//     if (typeof user.source === 'undefined') {
//       throw new Error(
//         "The source attribute is required.\nIf your Docusaurus site is not open-source, please make it explicit with 'source: null'",
//       );
//     } else {
//       const hasOpenSourceTag = user.tags.includes('opensource');
//       if (user.source === null && hasOpenSourceTag) {
//         throw new Error(
//           "You can't add the opensource tag to a site that does not have a link to source code.",
//         );
//       } else if (user.source && !hasOpenSourceTag) {
//         throw new Error(
//           "For open-source sites, please add the 'opensource' tag",
//         );
//       }
//     }
//   }

//   try {
//     checkFields();
//     checkTitle();
//     checkDescription();
//     checkWebsite();
//     checkPreview();
//     checkTags();
//     checkOpenSource();
//   } catch (e) {
//     throw new Error(
//       `Showcase site with title=${user.title} contains errors:\n${e.message}`,
//     );
//   }
// }

// Users.forEach(ensureUserValid);