const buttonContent = {

    OpenBrowser:{
        "browsertype": {"options":["Chrome","Edge"],"type":"select", "value":""},
        "Value": {"value":""},
        "fullwidth": {"value":""},
        "delay": {"value":""},
        "comment": {"value":""},
        "breakpoint": {"value":""}
    },
    ElementWait:{
        "driver": "driver",
        "Selectortype": "By.XPATH",
        "value": "/html/body/div[2]/form/div[1]/div/div[2]/div[1]/input",
        "timeout": "50",
        "outputvariable": "pageload",
        "content_desc": "Description",
        "comment": "",
        "breakpoint": "False"
    },
    Click:{
        "Selectortype": "By.XPATH",
        "Selectortool": "xpath",
        "Value": "/html/body/div[2]/form/div[1]/div/div[2]/div[1]/input",
        "delay": "1",
        "driver": "driver",
        "content_desc": "practice staff",
        "comment": "",
        "breakpoint": "False"
    },
    TypeInto:{
        "Selectortype": "By.XPATH",
        "Selectortool": "xpath",
        "Value": "/html/body/div/div[2]/div/form/div[2]/div/div[2]/div[1]/input",
        "SendKeyvalues": "`jrajendran`",
        "delay": "1",
        "driver": "driver",
        "content_desc": "username",
        "comment": "",
        "breakpoint": "False"
    }
}


export default buttonContent
