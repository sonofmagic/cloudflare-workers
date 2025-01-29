import { query } from './utils'

const domains = [
  'nuxt.com',
  'content.nuxt.com',
  // Github Host Start
  'github.githubassets.com',
  'central.github.com',
  'desktop.githubusercontent.com',
  'camo.githubusercontent.com',
  'github.map.fastly.net',
  'github.global.ssl.fastly.net',
  'gist.github.com',
  'github.io',
  'github.com',
  'api.github.com',
  'raw.githubusercontent.com',
  'user-images.githubusercontent.com',
  'favicons.githubusercontent.com',
  'avatars5.githubusercontent.com',
  'avatars4.githubusercontent.com',
  'avatars3.githubusercontent.com',
  'avatars2.githubusercontent.com',
  'avatars1.githubusercontent.com',
  'avatars0.githubusercontent.com',
  'avatars.githubusercontent.com',
  'codeload.github.com',
  'github-cloud.s3.amazonaws.com',
  'github-com.s3.amazonaws.com',
  'github-production-release-asset-2e65be.s3.amazonaws.com',
  'github-production-user-asset-6210df.s3.amazonaws.com',
  'github-production-repository-file-5c1aeb.s3.amazonaws.com',
  'githubstatus.com',
  'github.community',
  'media.githubusercontent.com',
  'objects.githubusercontent.com',
  'raw.github.com',
  'copilot-proxy.githubusercontent.com',
  // Github Host End
]

async function main() {
  for (const domain of domains) {
    await query('upsert-ip.sql', [domain])
  }
}

main()
