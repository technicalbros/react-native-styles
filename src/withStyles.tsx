import * as React from "react";
import * as _ from "lodash";

export default (styles: any) => Component => {

    function Com(props) {
        const {styles: overrides, ...restProps} = props
        const style = _.mergeWith({}, styles, overrides, (org, src) => ({...org, ...src}))
        return <Component styles={style} {...restProps}/>;
    }

    return Com

}
