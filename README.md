# Checklist Chart

Look in the Projects section for the list of open items.

## JSON data structure

For each `chief complaint` the json data file contains the following sections:

- key history
- risk factors
- ddx (differential diagnoses)
- suggested work-up
- references

For `key history` and `risk factors` each data point can have one of the following states:

- unaddressed (the patient has not been asked the question)
- yes (positive answer)
- no (negative answer)
- unknown (the patient is unsure of the correct answer)

For `ddx` each data item can have one of the following states:

- unaddressed
- considered and likely
- considered but unlikely

For `mdm` each data item can have one of the following states:

- do not include
- include

### Example data format

    { "diagnoses": [
      {
        "name": "NAME",
        "key_history": [
          {
            "section": [
              {"name": "NAME", "items": [
                  {"item": "TEXT", "value": "unaddressed"},
                  {"item": "TEXT", "value": "yes"},
                  {"item": "TEXT", "value": "no"},
                  {"item": "TEXT", "value": "unknown"}
              ]},
              {"name": "NAME", "items": [
                {"item": "TEXT", "value": "unaddressed"}
              ]}
            ]
          }
        ],
        "risk_factor": [
          {
            "section": [
              {"name": "NAME", "items": [
                {"item": "text", "value": "unaddressed"},
                {"item": "text", "value": "unaddressed"}
              ]},
              {"name": "NAME", "items": [
                {"item": "text", "value": "unaddressed"},
                {"item": "text", "value": "unaddressed"}
              ]}
            ]
          }
        ],
        "ddx": [
          {"item": "text", "value": "considered and likely"},
          {"item": "text", "value": "considered but unlikely"},
          {"item": "text", "value": "unaddressed"}
        ],
        "mdm": [
          {"item": "itemName", "text": "Long MDM text", "value": "do not include"},
          {"item": "itemName", "text": "Extra long MDM text", "value": "include"}
        ],
        "resource": [
          {"item": "Resource text", "value": "http://mdcalc.com"}
        ]
      }
    }

## Static Files for Market Research

[Vertigo or Syncope](https://ericwilke.github.io/checklistchart/static/checklist-chart-vertigo-syncope.html)
