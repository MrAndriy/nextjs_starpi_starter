import { AiFillTwitterCircle, AiFillYoutube } from 'react-icons/ai'
import { CgWebsite } from 'react-icons/cg'
import { FaDiscord } from 'react-icons/fa'

import type { Social } from '@/types/SocialLink'

function RenderSocialIcon({ social }: { social: Social | undefined }) {
  switch (social) {
    case 'WEBSITE':
      return <CgWebsite />
    case 'TWITTER':
      return <AiFillTwitterCircle />
    case 'YOUTUBE':
      return <AiFillYoutube />
    case 'DISCORD':
      return <FaDiscord />
    default:
      return null
  }
}

export default RenderSocialIcon
