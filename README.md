Example 1
---------------
<ng-template>
      ↓
TemplateRef
      ↓
Represents WHAT can be rendered


Example 2
-----------------
<ng-container #templateContainer>
      ↓
ViewContainerRef
      ↓
WHERE the template is rendered
      ↓
createEmbeddedView()


Example 3
----------------
<ng-container>
      ↓
Groups elements
      ↓
Does NOT create an extra DOM element


Example 4
-----------------
ViewContainerRef
      ↓
createComponent()
      ↓
NotificationComponent created dynamically