import { SculptureCreate } from '../../components/sculpture-components'
import { Form } from 'antd'

const SculptureCreatePage = props => {
  return <SculptureCreate {...props} />
}

// SculptureCreatePage.getInitialProps = ({ req }) => {
//   if (req) {
//     console.log('hello server side')
//     return {
//       isServer: true
//     }
//   } else {
//     return {
//       testVal: localStorage.getItem('creditLine')
//     }
//   }
// }

const WrappedSculptureCreatePage = Form.create({ name: 'normal_login' })(
  SculptureCreatePage
)

export default WrappedSculptureCreatePage
