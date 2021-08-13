# Checklist Chart

Look in the Projects section for the list of open items.

## JSON data structure

For each `chief complaint` the json data file contains the following sections:

- key history
- risk factors
- ddx (differential diagnoses)
- suggested work-up
- references

For `key history`, `risk factors`, and `ddx`, each data point can have one of the following states:

- unaddressed (the patient has not been asked the question)
- yes (positive answer)
- no (negative answer)
- unknown (the patient is unsure of the correct answer)

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
          {"item": "Long MDM text", "value": "do not include"},
          {"item": "Long MDM text", "value": "include"}
        ],
        "resource": [
          {"item": "Resource text", "value": "http://mdcalc.com"}
        ]
      }
    }
