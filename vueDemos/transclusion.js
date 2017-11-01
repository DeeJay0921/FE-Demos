//slot
// Vue.component('deejay',{
//     template: `
//         <div>
//             <h1>deejay-title</h1>
//             <slot></slot>
//             <h2>deejay-footer</h2>
//         </div>
//     `
// })


// slot --- name 具名插槽
// Vue.component('deejay',{
//     template: `
//                 <div>
//                     <header>
//                         <slot name="header"></slot>
//                     </header>
//                     <main>
//                         <slot name="main"></slot>
//                     </main>
//                     <footer>
//                         <slot name="footer"></slot>
//                     </footer>
//                 </div>
//                 `
// })

// slot 作用域插槽
// Vue.component('deejay',{
//     template: `
//         <div>
//             <h1> deejay- title</h1>
//             <slot msg="deejaySlot"></slot>
//         </div>
//     `
// })
new Vue ({
    el: 'div'
})