import React,{useRef, useEffect,useState} from 'react'

export default function Canvas(props){
    const canvasRef = useRef(null)
    const parentRef   = useRef(null);
    const [style, setStyle] = useState({width:0,height:0})
    const image = new Image()
    const draw = (ctx, frameCount) => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
        const imageCount = frameCount % 300
        image.src = `/assets/frames/min.0${imageCount}.png`
        ctx.drawImage(image, 0,0,ctx.canvas.width, ctx.canvas.height)
      }
    //   function resizeCanvasToDisplaySize(canvas) {
    
    //     const { width, height } = canvas.getBoundingClientRect()
    
    //     if (canvas.width !== width || canvas.height !== height) {
    //       canvas.width = width
    //       canvas.height = height
    //       return true // here you can return some usefull information like delta width and delta height instead of just true
    //       // this information can be used in the next redraw...
    //     }
    
    //     return false
    //   }
    //   function resizeCanvas(canvas) {
    //     const { width, height } = canvas.getBoundingClientRect()
        
    //     if (canvas.width !== width || canvas.height !== height) {
    //       const { devicePixelRatio:ratio=1 } = window
    //       const context = canvas.getContext('2d')
    //       canvas.width = width*ratio
    //       canvas.height = height*ratio
    //       context.scale(ratio, ratio)
    //       return true
    //     }
    
        return false
      }      
    //   useEffect(() => {
    //       if(canvasRef.current){
    //           resizeCanvas(canvasRef.current)
    //       }
    //   },[canvasRef])
      useEffect(() => {
          if(parentRef.current){
            let parentWidth  = parentRef.current.offsetWidth;
            setStyle({width:parentWidth + 'px',height:parentWidth*1.77 + 'px'})
            image.width= parentWidth
            image.height = parentWidth * 1.77
          }
      },[parentRef])
  useEffect(() => {
    
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    let frameCount = 0
    let animationFrameId
    
    //Our draw came here
    const render = () => {
      frameCount++
      draw(context, frameCount)
      animationFrameId = window.requestAnimationFrame(render)
    }
    render()
    
    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [draw])

    return(
        <div className="w-100" ref = { parentRef }>
        <canvas ref={canvasRef} width={style.width} height={style.height} {...props}/>
        </div>
    )
}