const buttonContent = {
 //Update ButtonValues also when updating this 
 
 //ButtonValue Provides the data for backend json

    OpenBrowser:{
        "Browser Type": {"options":["Chrome","Edge"],"type":"select", "value":""},
        "Enter URL": {"value":""},
        "Browser Width": {"options":["Default","Full Width"],"type":"select", "value":""},
        "Delay (in Seconds)": {"value":""},
    },
    ElementWait:{
        "driver": "driver",
        "Selectortype": "By.XPATH",
        "value": "/html/body/div[2]/form/div[1]/div/div[2]/div[1]/input",
        "timeout": "50",
        "outputvariable": "pageload",
        "content_desc": "Description",
    },
    Click:{
        "Selectortype": "By.XPATH",
        "Selectortool": "xpath",
        "Value": "/html/body/div[2]/form/div[1]/div/div[2]/div[1]/input",
        "delay": "1",
        "driver": "driver",
        "content_desc": "practice staff",
    },
    TypeInto:{
        "Selectortype": "By.XPATH",
        "Selectortool": "xpath",
        "Value": "/html/body/div/div[2]/div/form/div[2]/div/div[2]/div[1]/input",
        "SendKeyvalues": "`jrajendran`",
        "delay": "1",
        "driver": "driver",
        "content_desc": "username",
    }
}


export default buttonContent
