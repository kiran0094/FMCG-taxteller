export const json = {
  "title": "FMCG invoice  generator",
  "pages": [
    {
      "name": "page1",
      "elements": [
         // from
        {
          "type": "panel",
          "name": "From",
          "title": "From",
          "state": "expanded",
          "elements": [
            {
              "type": "text",
              "name": "company name",
              "title": "Company name",
              "isRequired": true
            },
             {
              "type": "text",
              "name": "contact person name",
              "title": "contact person name",
              "startWithNewLine": false,
              "isRequired": true
            },
            {
              "type": "text",
              "name": "company address",
              "title": "Company address",
              "isRequired": true
            },
            {
              "type": "text",
              "name": "email",
              "title": "Email",
              "isRequired": true,
              "startWithNewLine": false,
              "validators": [
                { "type": "email" }
             ]              
            },

            {
              "type": "text",
              "name": "phoneno",
              "title": "Phoneno",
               "inputType": "number",

              
            },
            {
              "type": "text",
              "name": "GST number",
              "startWithNewLine": false,
              "title": "GST number",              
              
            }
          ]
        },
        // to
        {
          "type": "panel",
          "name": "Bill to",
          "title": "Bill to",
          "state": "expanded",
          "elements": [
            {
              "type": "text",
              "name": "tocompany name",
              "title": "Company name",
              "isRequired": true
            },
             {
              "type": "text",
              "name": "tocontact person name",
              "title": "contact person name",
              "startWithNewLine": false,
              "isRequired": true
            },
            {
              "type": "text",
              "name": "tocompany address",
              "title": "Company address",
              "isRequired": true
            },
            {
              "type": "text",
              "name": "toemail",
              "title": "Email",
              "isRequired": true,
              "startWithNewLine": false,
              "validators": [
                { "type": "email" }
             ]              
            },

            {
              "type": "text",
              "name": "tophoneno",
              "title": "Phoneno",              
               "inputType": "number",
            },
            {
              "type": "text",
              "name": "toGST number",
              "startWithNewLine": false,
              "title": "GST number",              
              
            }
          ]
        },
        // details page
      {
        
      "type": "paneldynamic",
      "name": "product-info",
      "title": "enter details",
      "panelCount": 1,
      "maxPanelCount": 10,
      "confirmDelete": true,
      "templateElements": [
          {
              "type": "text",
              "name": "product name",
              "title": "product name",
              "isRequired": true
            },
            {
                "type": "text",
                "name": "qnt",
                "title": "Quantity",
                "startWithNewLine": false,
                "inputType": "number",
                "isRequired": true,
                "validators": [{
                "type": "numeric",
                "text": "Quantity can't be negative",
                "minValue": 0,
                }]
            },
            {
                "type": "text",
                "name":"price_n",
                "title": "price excluding tax",
                "isRequired": true,
              
                "startWithNewLine": false,
            },
            {
                "type": "expression",
                "name": "price including tax",
                "title": "price including tax",
                "inputType": "number",
                "startWithNewLine": false,
                "expression":"{panel.price_n}*{panel.qnt}+{panel.Tax_Amount}",
            },
            
            {
                "type": "dropdown",
                "name": "slab",
                "title": "Tax slab",
                 "choices": [{ "value": 0, "text": "0" },
                            { "value": 2, "text": "2" },
                            { "value": 9, "text": "9" },
                            { "value": 10, "text": "10" },
                            { "value": 12, "text": "12" },
                            { "value": 18, "text": "18" } ],
                "startWithNewLine": false,
            },

            {
              "type": "expression",
              "name": "Tax_Amount",
              "title": "Tax Amount",              
               "inputType": "number",
                "startWithNewLine": false,
                 "expression": "({panel.slab}/100)*{panel.qnt}*{panel.price_n}",
            },
            {
              "type": "expression",
              "name": "total",
              "title": "Total",
              "startWithNewLine": false,
              "expression": "{panel.price_n}*{panel.qnt}+{panel.Tax_Amount}",
              
            }      
      ]      
    }, 
     {
      "type": "expression",
      "name": "total",
      "title": "Total price",
      "titleLocation": "left",
      "expression": "sumInArray({product-info}, 'total')"
    },
     {
      "type": "expression",
      "name": "total_tax",
      "title": "Total tax",
      "titleLocation": "left",
      "expression": "sumInArray({product-info}, 'Tax_Amount')"
    }
  ],
  "showQuestionNumbers": true,
  "checkErrorsMode": "onValueChanged"
}
  ],
  "showQuestionNumbers": "off",
  "questionErrorLocation": "bottom"
};