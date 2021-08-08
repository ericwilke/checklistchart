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

`{
  "diagnosis": {
                  "key history": {
                    "section1": [{"item1": "unaddressed"},
                                 {"item2": "unaddressed"}],
                    "section2": [{"item1": "unaddressed"},
                                 {"item2": "unaddressed"}],
                  },
                  "risk factors": {
                    "section1": [{"item1": "unaddressed"},
                                 {"item2": "unaddressed"}],
                    "section2": [{"item1": "unaddressed"},
                                 {"item2": "unaddressed"}],
                  },
                  "ddx": {
                    "section1": [{"item1": "unaddressed"},
                                 {"item2": "unaddressed"}],
                    "section2": [{"item1": "unaddressed"},
                                 {"item2": "unaddressed"}],
                  },
                  "suggested work-up": {
                    "section1": ["item1", "item2"],
                    "section2": ["item1", "item2"]
                  },
                  "references": {
                    "section1": ["item1", "item2"],
                    "section2": ["item1", "item2"]
                  }
                }
}`
