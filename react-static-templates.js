
import universal, { setHasBabelPlugin } from 'D:/dev/cidr.xyz/node_modules/react-universal-component/dist/index.js'


setHasBabelPlugin()

const universalOptions = {
  loading: () => null,
  error: props => {
    console.error(props.error);
    return <div>An error occurred loading this page's template. More information is available in the console.</div>;
  },
}

const t_0 = universal(import('../node_modules/react-static/lib/browser/components/Default404'), universalOptions)


// Template Map
export default {
  '../node_modules/react-static/lib/browser/components/Default404': t_0
}

export const notFoundTemplate = "../node_modules/react-static/lib/browser/components/Default404"
