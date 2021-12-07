import chai from 'chai'
import { configure } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'

configure({ adapter: new Adapter() })

global.expect = chai.expect

jest.mock('@tarojs/taro', () => ({
  request: () => new Promise((resolve) => resolve({ data: { Website: 'fake response' } })),
  getEnv: () => 'env'
}))
