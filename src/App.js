import React, { useEffect, useState } from 'react'
import ShakaPlayer from 'shaka-player-react';
import 'shaka-player/dist/controls.css';


function App() {
  const [videoUrl, setVideoUrl] = useState('')
  const [width, setWidth] = useState(window.innerWidth)
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth))
  }, [])

  const data = [
    {
      id: 1,
      title: "Horse Running",
      image: "https://firebasestorage.googleapis.com/v0/b/mystore-51bd6.appspot.com/o/horseImage.jpg?alt=media&token=2484d413-1392-4f42-8c23-7742bbf15a69",
      descriptions: "Lorem Ipsum is simply dummy text of 1500s",
      video: "https://firebasestorage.googleapis.com/v0/b/mystore-51bd6.appspot.com/o/hors.mp4?alt=media&token=2fba55eb-d471-4d0d-9f72-e1afbf8ded17"
    },
    {
      id: 2,
      title: "fish Playing",
      image: "https://firebasestorage.googleapis.com/v0/b/mystore-51bd6.appspot.com/o/fishImage.jpg?alt=media&token=93334fa8-1698-47dd-8d23-af42d4b9b265",
      descriptions: "a galley of type and scrambled it to make a centuries",
      video: "https://firebasestorage.googleapis.com/v0/b/mystore-51bd6.appspot.com/o/fish.mp4?alt=media&token=69b36e8b-c829-4395-bd24-e834e9192b0e"
    },
  ]

  const mapData = data.map((dt) => {
    return (
      <div className='border-bottom py-2 px-2' key={dt.id} onClick={() => setVideoUrl(dt.video)}>
        <p>Title: {dt.title}</p>
        <p><img src={dt.image} style={{ width: "100px", heidht: "100px" }} /></p>
        <p>Descriptions: {dt.descriptions}</p>
        {/* <p>video: {dt.video}</p> */}
      </div>
    )
  })



  return (
    <div>
      <ul class="nav justify-content-center py-1" style={{ backgroundColor: "seagreen" }}>
        <li class="nav-item" style={{ fontWeight: "bold", color: "#fff" }}>
          Created by Muklasar Rahaman
        </li>
      </ul>
      <div className="container mt-4" style={{ boxShadow: "1px 1px 2px 1px #aaa" }}>
        <div className='row'>
          {width > 780 ?
            <div className='col-lg-4 col-sm-0 bg-light'>
              {mapData}
            </div> :
            toggle ?
              <div>
                <div className='bg-light' style={{ position:"absolute", top:0, left:0, zIndex:"10" }}>
                  <div className='text-end mx-2'>
                    <div className='btn btn-sm btn-danger mt-2' onClick={()=>setToggle(!toggle)}>close</div>
                  </div>
                  {mapData}
                </div>
              </div>
              :
              <div className='py-2 bg-light border-none'>
                <div className='btn btn-sm btn-success' onClick={() => setToggle(!toggle)}>Open Inside Content</div>
              </div>
          }
          <div className='col-lg-8 col-sm-12 p-0 m-0 bg-dark'>
            <ShakaPlayer autoPlay src={videoUrl} style={{ height: "500px", width: "100%" }} />
          </div>

        </div>
      </div>
    </div >

  );
}

export default App;
