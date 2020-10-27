---
sidebar: auto
---

# Custom Opengate UX views

Opengate UX gives you a way to customize all the entity management forms. So that, you will be able to tailor it as your solution need it.

## Let's customize a form

You will find the customized views wizard at:

> Actions menu ->  Set entity wizard view

This dialog shows all the availables views, whether there was any. To create a new view, you should click on the **NEW** button, then the new setting view dialog will pop up.  

### 1. Step _Administrative data_

Here you should choose a name for the new view, such as: _Electric Panel_

Every single view is come with both an entity type and subtype making possible the after matching. You can create as many views with the same association as you need or wish. How you can choose between them will be explained later.

### 2.1. Step _Set your fields_

This is the moment to choose which fields you wish to be showed. 
You will be able to choose only between the optional fields. If there were any step with no fields on it, this step won't be shown.

### 2.2. Step _Add an additional step_

If it was needed, you could add as many new steps as you want, just clicking on **ADD STEP**. You should choose a title and a name.
Although it isn't necessary, you could set a description for the new step.

Once filled the basic step data, you should decide what fields will be shown. For doing that, you can choose between:

* **Select fields on step** it will show, in this step, a combo with all the available fields, so that the user would choose which fields wants to fill.  
* **View specific fields on step** it allows the user to customize what and how will show with accuracy.

> Only the provision datastreams will be showed on the previous combo, where you had to choose what fields will be shown ( in other words, datastreams which starts with _provision_, such as: __provision.wardrobeConstructionDate__) 

## Advance additional step configuration

If you chosen the **View specific fields on step** option, just right after being the fields selected, you would decide how it will be displayed. You can select one layout already done for you, or if it wasn't enough, you can create your own setting from scratch.

Each field selected will be displayed depending on its type.

Let's have a look at the different layouts which are already done.

> Once a layout has been chosen, you can make adjustments on it.

### One Column

It will show each field one right below the other, in other words, in just one column with vertical alignment.

::: details One column layout
```json
[
  {
    "type": "help",
    "htmlClass": "row",
    "helpvalue": "<h3 class='primary--text'>Titulo del formulario personalizado</h3>"
  },
  {
    "key": "['provision.arrayenum']"
  },
  {
    "key": "['provision.boolean']"
  },
  {
    "key": "['provision.stringenum']"
  },
  {
    "key": "['provision.date']"
  },
  {
    "key": "['provision.time']"
  },
  {
    "key": "['provision.number']"
  }
]
```
:::

### Many columns

It will let you decide in how many columns will be the fields displayed 

::: details 2 columns example
```json
[
  {
    "type": "help",
    "htmlClass": "row",
    "helpvalue": "<h3 class='primary--text'>Titulo del formulario personalizado</h3>"
  },
  {
    "type": "section",
    "htmlClass": "row",
    "items": [
      {
        "type": "section",
        "htmlClass": "col md6",
        "items": [
          {
            "key": "['provision.arrayenum']"
          },
          {
            "key": "['provision.stringenum']"
          },
          {
            "key": "['provision.time']"
          }
        ]
      },
      {
        "type": "section",
        "htmlClass": "col md6",
        "items": [
          {
            "key": "['provision.boolean']"
          },
          {
            "key": "['provision.date']"
          },
          {
            "key": "['provision.number']"
          }
        ]
      }
    ]
  }
]
```
:::

### By tabs

This layout will be worthy whenever you would like to classify groups of fields on tabs, allowing you to have a better and a tidy view. We encoruge you to choose this option, only when the amount of fields selected are quite big.

Just choosing the number of fields by tab and the number of columns, it will  distribute all the fields evenly throughout the tabs. 

::: details Tab layout ( 2 fields by tab, 2 colums by tab)
```json
[
  {
    "type": "help",
    "htmlClass": "row",
    "helpvalue": "<h3 class='primary--text'>Titulo del formulario personalizado</h3>"
  },
  {
    "type": "tabs",
    "tabs": [
      {
        "title": "Título de pestaña 1",
        "items": [
          {
            "type": "help",
            "htmlClass": "col xs12",
            "helpvalue": "<h4>Descripción de pestaña 1</h4>"
          },
          {
            "type": "section",
            "htmlClass": "row",
            "items": [
              {
                "type": "section",
                "htmlClass": "col xs6",
                "items": [
                  {
                    "type": "help",
                    "htmlClass": "col xs12",
                    "helpvalue": "<h5>Nombre de columna</h5>"
                  },
                  {
                    "key": "['provision.arrayenum']"
                  }
                ]
              },
              {
                "type": "section",
                "htmlClass": "col xs6",
                "items": [
                  {
                    "type": "help",
                    "htmlClass": "col xs12",
                    "helpvalue": "<h5>Nombre de columna</h5>"
                  },
                  {
                    "key": "['provision.boolean']"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "title": "Título de pestaña 2",
        "items": [
          {
            "type": "help",
            "htmlClass": "col xs12",
            "helpvalue": "<h4>Descripción de pestaña 2</h4>"
          },
          {
            "type": "section",
            "htmlClass": "row",
            "items": [
              {
                "type": "section",
                "htmlClass": "col xs6",
                "items": [
                  {
                    "type": "help",
                    "htmlClass": "col xs12",
                    "helpvalue": "<h5>Nombre de columna</h5>"
                  },
                  {
                    "key": "['provision.stringenum']"
                  }
                ]
              },
              {
                "type": "section",
                "htmlClass": "col xs6",
                "items": [
                  {
                    "type": "help",
                    "htmlClass": "col xs12",
                    "helpvalue": "<h5>Nombre de columna</h5>"
                  },
                  {
                    "key": "['provision.date']"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "title": "Título de pestaña 3",
        "items": [
          {
            "type": "help",
            "htmlClass": "col xs12",
            "helpvalue": "<h4>Descripción de pestaña 3</h4>"
          },
          {
            "type": "section",
            "htmlClass": "row",
            "items": [
              {
                "type": "section",
                "htmlClass": "col xs6",
                "items": [
                  {
                    "type": "help",
                    "htmlClass": "col xs12",
                    "helpvalue": "<h5>Nombre de columna</h5>"
                  },
                  {
                    "key": "['provision.time']"
                  }
                ]
              },
              {
                "type": "section",
                "htmlClass": "col xs6",
                "items": [
                  {
                    "type": "help",
                    "htmlClass": "col xs12",
                    "helpvalue": "<h5>Nombre de columna</h5>"
                  },
                  {
                    "key": "['provision.number']"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
]
```
:::

### Custom mode

Likewise, the view wizard allows you to customized a fully manual layout. It brings you the chance to setting the view even more adjusted. Right below you will learn how to do this.

## Custom mode (deeply)

> Before going deeper on it, we encourage you to firstly play with the layouts already done.  

In order to set the layout, it is used _json form_, this is a json with a specific structure. In this structure, you will find a set of properties which lets you shape the form.

This section is divided in two parts: how modify the content layout and how customize the fields shown.

### How modify the content layout

To shape the form, you have on your hands the next attributes:

| Element | Attribute | Description | Mandatory |
| ------------- |-------------|-----|---|
| help |   | Allows you to add in the form an html dom element |
|  | helpvalue  | HTML code with the data to be shown  | :white_check_mark: |
|  | helpClass  | CSS classes that will be added to the element  |
| section      |  | Allows group elements  |  
|       | items[ ] | Section items  |  :white_check_mark: |
|       | title      | Section title |
|  | helpClass  | CSS classes that will be added to the element  |
| tabs |       | Group elements by tabs |  |
|  | items[ ]      | Tab items | :white_check_mark: |
|   | title      | Tab title | :white_check_mark: |

* If you need help filling **helpClass**, go to [Stylesheet Vuetify](https://vuetifyjs.com/en/styles/colors/)

### How customize the fields shown

Shown below the fields format options:

| Attribute | Description | Mandatory |
| ------------- |-------------|-----|
| key  | Identifies which field is displayed | :white_check_mark: |
| title | Overwrite the original datastream name by this value |
| description | Field description |
| helpClass |  CSS classes that will be added to the element  |
| titleMap [ {"name": "etiqueta asignada", "value": "valor final equivalente" } ] | Useful to assign either tags or values in text fields with or without enums |
| type (*) | allows modify the displayed control |

(*) _type_ field values and identify where it can be applied:

| Value | Control type | Applied to... | 
| ------------- |-------------|-----|
| "textarea" | Shows a bigger text field to add information | Text data type |
| "password" | Shows an encoded field text | Text data type |
| "asset" (**) | Shows an entity combo, type of entity **asset** | Useful when checking the entity existence is required |
| "device" (**) | Shows an entity combo, type of entity **device** | Useful when checking the entity existence is required  |
| "ticket" (**) | Shows an entity combo, type of entity **tickets** | Useful when checking the entity existence is required  |
| "entity" (**) | Shows an entity combo, all sort of entity types are shown except the **ticket** ones | Useful when checking the entity existence is required  |
| "radio" | Shows multiple values to select | Text data type with enum or **titleMap**  |
| "radiobuttons" | Shows different values in a button way to select one of them | Text data type with enum or **titleMap**  |
| "slider" | Shows a slider | Numeric data type with **minValue** and **maxValue** |

(**) These types have a bunch of specific attributes, attributes with which you can personalize how the components will perform the searching.

### Advanced features to entity and tickets selection controls

| Attribute | Description | Type | Default value |
| ------------- |-------------|-----|-----|
| disableDefaultSorted  | Disables sorting by identifier. It will make faster the internal searching | boolean | **true** |
| disableCaseSensitive  | Disables the case sensitive in the internal searching | boolean | **false** |
| quickSearchFields | Allows setting different searching fields | array of strings | **["provision.administration.identifier"]** for entities or **["provision.administration.identifier", "provision.ticket.specificType", "provision.ticket.name", "provision.ticket.type", "provision.ticket.entity"]** for tickets |
| exactSearch | Activates the exact match searching, it speeds up the searching, however you should know the exact value | boolean | **false** |
| forceFilter | Before showing the component searching result, it forces to add a filter. | boolean | **false** |