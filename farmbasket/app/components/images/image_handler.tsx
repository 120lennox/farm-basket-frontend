import Image from "next/image"

export default function ImageHandler(
    {image, name}:{image:string, name:string}
){
    return <div>
        <div>
            <div>
                <Image
                src={image}
                alt="Description"
                width={500}
                height={700}
                />
            </div>
        </div>
    </div>
}