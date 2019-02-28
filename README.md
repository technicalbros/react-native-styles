# react-native-styles

This library provides a nice way to handle styles and overrides in React Native components, inspired by JSS for web.

**Usage with Typescript**

*MyButton.tsx*

```tsx
import * as React from "react";
import {withStyles} from "@technicalbros/react-native-styles";
import {TouchableOpacity, Text} from "react-native";

//@ts-ignore
@withStyles({
    root: {
        backgroundColor: "red",
        width: "100%",
        padding: 8
    },
    text: {
        color: "white"
    }
})
export class MyButton extends React.Component{
    
    props: {
        styles?: {
            root?:any,
            text?:any
        },
        children: any
    }
    
    render(){
        
        const {styles, children} = this.props;
        
        return <TouchableOpacity style={styles.root}>
            <Text style={styles.text}>{children}</Text>
        </TouchableOpacity>
    }
}
```



Here `@withStyles` decorator creates a high order component, which injects a `styles` prop in the original component.



*MyButton* usage

```tsx
<MyButton 
    styles={{
        backgroundColor: "blue"
    }}
>
    Click Me
</MyButton>
```

In above code, only `backgroundColor` will be overridden from `"red" ` to `"blue"`, while other style remains the same as defaults.