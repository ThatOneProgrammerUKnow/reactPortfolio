import "./images.css";

export function Image({src, alt}){
    return (
        <>
            <img className="image" src={src} alt={alt} />
        </>
    )
}

export default function ImageSlider({totalImages, imageExtension}){
    // Getting image names
    const srcList = []
    for (let i=1; i<totalImages+1; i++){
        srcList.push("/images/img"+i+"."+imageExtension);
    }

    // Adding src to Image tags
    const images = srcList.map(src =>
        <div className="imageContainer" key={src}>
            <Image src={src} alt="Some image about Kobus."/>
        </div>
    )

    // Containers
    return (
        <div className="sliderWrapper">
            <div className="slider">
                {images}
            </div>
            <div aria-hidden className="slider slide">
                {images}
            </div>  
        </div>

    )
}