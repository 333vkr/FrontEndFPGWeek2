# Css Specificity
    Specificity is the means by which browsers decide which CSS property values are the most relevant to an element 
    and, therefore, will be applied.
    if two CSS selectors apply to the same element, the one with higher specificity is used.

 # Hierarchy
 There are four categories which define the specificity level of a selector:

    1.Inline styles - Example: <h1 style="color: pink;">
    2.IDs - Example: #navbar
    3.Classes, pseudo-classes, attribute selectors - Example: .test, :hover, [href]
    4.Elements and pseudo-elements - Example: h1, ::before

# Calculate Specificity
    Start at 0, add 100 for each ID value, add 10 for each class value (or pseudo-class or attribute selector), add 1 for each element selector or pseudo-element.The higher value always given the highest priority.


# !important tag
     Applying !important to the property value of any selector makes it the value that will be applied to the element. This happens regardless of the rank of the selector on the Specificity hierarchy.

