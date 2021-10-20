import { ROUTES} from "./Routes";




export const goToMain=(navigation)=>{
    navigation.reset({
        index:0,
        routes:[{name:ROUTES.MAIN}]
    })
    //navigation.navigate(ROUTES.MAIN);
}