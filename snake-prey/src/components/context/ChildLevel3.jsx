import React from "react";

const ChildLevelThree = ({fromLv2}) => {

    console.log('re-render from level 3')

    return <div>
        Something from Level 2: {fromLv2.val}
    </div>
}

export default React.memo(ChildLevelThree);
// export default ChildLevelThree;