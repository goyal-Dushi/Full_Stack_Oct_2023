/***
 *  Drag & Drop API:
 *   -  provided by browser not the part of JS
 *   -  allows the users to drag and drop the elements in specified target area.
 * 
 *   coronological order: 
 *    - drag started
 *    - drop happened
 *    - drag end
 * 
 *  drag and drop events:
 *   1. dragstart
 *   2. dragend
 *   3. drop
 *   4. dragover
 *   5. dragenter
 *   6. dragleave
 * 
 *  How to implement it?
 *   1. set the HTML Structure
 *       - <div draggagle="true"></div>
 *       - <div id="drop-area"></div>
 *   2. add css style (optional)
 * 
 *   3. attach event on the draggable element
 * 
 *      elem.addEventListener('drag and drop event name', methods)
 * 
 * 
 * 
 */