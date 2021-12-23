import React, {Component} from 'react'
import Bio from '../Bio/index.js'
import SocialBox from '../SocialBox/index.js'
import Footer from '../Footer/index.js'
import ContactBox from '../ContactBox/index.js'

import { SOCIAL_ICONS_AND_LINKS } from '../../constants.js'

class Home extends Component {
  render() {
    return(
      <React.Fragment>
        <Bio name='Leandro Vicente' tagline='Creator and Product Analyst' />
        <SocialBox iconsAndLinks={SOCIAL_ICONS_AND_LINKS} />
        <ContactBox /> 
        <Footer address='Rio de Janeiro, Brazil' />
      </React.Fragment>
    )
  }
}

export default Home