const calculateTemp = () =>{
    const numberTemp = document.getElementById('temp').value;
    const tempSelected = document.getElementById('temp_diff');

    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;

    const celTofeh = (cel) =>{
        let faherhenit = Math.round((cel * 9/5) + 32);
        return faherhenit;    
    }
    const fehTocel = (fehr) =>{
        let celcius = Math.round((fehr -32) *5/9);
        return celcius;    
    }
    let result ;
    

    if(valueTemp == 'cel'){
        result = celTofeh(numberTemp);
        document.getElementById('resultContainer').innerHTML = `${result}°fahernheit`;
    }else{
      
            result = fehTocel(numberTemp);
            document.getElementById('resultContainer').innerHTML = `${result}°celcius`;
    }
}