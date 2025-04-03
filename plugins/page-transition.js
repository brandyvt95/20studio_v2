// plugins/page-transition.js
import { defineNuxtPlugin } from '#app'
import gsap from 'gsap'

export default defineNuxtPlugin((nuxtApp) => {
  let previousRoute = null
  let currentRoute = null
  let previousPageContent = null
  
  nuxtApp.hook('page:start', () => {
    // Lưu lại trang hiện tại trước khi chuyển trang
    if (document.querySelector('#page-content')) {
      previousPageContent = document.querySelector('#page-content').cloneNode(true)
      previousRoute = currentRoute
    }
  })

  nuxtApp.hook('page:finish', () => {
    // Lấy nội dung trang mới
    const newPageContent = document.querySelector('#page-content')
    if (!newPageContent) return
    
    currentRoute = window.location.pathname
    
    // Chỉ áp dụng hiệu ứng nếu có trang trước đó
    if (previousPageContent && previousRoute !== currentRoute) {
      // Tạo một container cho trang cũ
      const oldPageContainer = document.createElement('div')
      oldPageContainer.id = 'previous-page'
      oldPageContainer.classList.add('absolute', 'inset-0', 'z-10')
      oldPageContainer.appendChild(previousPageContent)
      document.body.appendChild(oldPageContainer)
      
      // Đặt ẩn trang mới ban đầu
      gsap.set(newPageContent, { opacity: 0, y: 50 })
      
      // Hiệu ứng cho trang mới
      gsap.to(newPageContent, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.1
      })
      
      // Hiệu ứng cho trang cũ
      gsap.to(oldPageContainer, {
        opacity: 0,
        y: -50,
        duration: 0.8,
        delay: 0.6,
        onComplete: () => {
          // Xóa trang cũ sau khi animation kết thúc
          if (document.querySelector('#previous-page')) {
            document.querySelector('#previous-page').remove()
          }
        }
      })
    } else {
      // Nếu không có trang trước đó, chỉ hiển thị trang mới
      gsap.fromTo(
        newPageContent,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8 }
      )
    }
  })
})