import { ActivityIndicator,StyleSheet,View } from "react-native";

const LoadingView =()=> {

        return (
            <View style={styles.container}>
                <ActivityIndicator size="small" color="#ffffff00"/>
            </View>
        );
    }

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        opacity: 0.2,
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
    }
});

export default LoadingView;