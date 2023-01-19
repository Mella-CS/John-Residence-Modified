(function(){
    var script = {
 "definitions": [{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_C7E97391_CA38_8A5A_41E8_230F11E7E332_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -130.09,
   "backwardYaw": 43.25,
   "distance": 1,
   "panorama": "this.panorama_C412F256_CA38_8AC6_41E5_DD84C806FD80"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 44.25,
   "backwardYaw": -57.74,
   "distance": 1,
   "panorama": "this.panorama_C7E88443_CA38_8E3E_41C9_36CF5F9E2228"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C483C6C8_CA38_8BCB_41BE_653ED163EED7"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_C43FBF2B_CA38_BA4D_41D2_F228847F996B",
 "thumbnailUrl": "media/panorama_C43FBF2B_CA38_BA4D_41D2_F228847F996B_t.jpg",
 "label": "kit x din",
 "pitch": 0,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_C43FBF2B_CA38_BA4D_41D2_F228847F996B_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C43FBF2B_CA38_BA4D_41D2_F228847F996B_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C43FBF2B_CA38_BA4D_41D2_F228847F996B_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C43FBF2B_CA38_BA4D_41D2_F228847F996B_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C43FBF2B_CA38_BA4D_41D2_F228847F996B_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C43FBF2B_CA38_BA4D_41D2_F228847F996B_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C43FBF2B_CA38_BA4D_41D2_F228847F996B_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C43FBF2B_CA38_BA4D_41D2_F228847F996B_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C43FBF2B_CA38_BA4D_41D2_F228847F996B_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C43FBF2B_CA38_BA4D_41D2_F228847F996B_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C43FBF2B_CA38_BA4D_41D2_F228847F996B_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C43FBF2B_CA38_BA4D_41D2_F228847F996B_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C43FBF2B_CA38_BA4D_41D2_F228847F996B_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C43FBF2B_CA38_BA4D_41D2_F228847F996B_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C43FBF2B_CA38_BA4D_41D2_F228847F996B_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C43FBF2B_CA38_BA4D_41D2_F228847F996B_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C43FBF2B_CA38_BA4D_41D2_F228847F996B_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C43FBF2B_CA38_BA4D_41D2_F228847F996B_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C43FBF2B_CA38_BA4D_41D2_F228847F996B_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_D621BDF7_CA5B_79C6_41D0_A01771D44D48",
  "this.overlay_D6CAA19C_CA5B_864A_41C3_FCDCF2BEB51E",
  "this.overlay_D7819975_CA58_86DA_41E7_EFAE893A4D78"
 ]
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C412F256_CA38_8AC6_41E5_DD84C806FD80"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -57.74,
   "backwardYaw": 44.25,
   "distance": 1,
   "panorama": "this.panorama_C43FBF2B_CA38_BA4D_41D2_F228847F996B"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 79.42,
   "backwardYaw": 53.79,
   "distance": 1,
   "panorama": "this.panorama_C43B5930_CA38_865A_41E1_0D875BCF0737"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -113.51,
   "backwardYaw": 24.16,
   "distance": 1,
   "panorama": "this.panorama_C483C6C8_CA38_8BCB_41BE_653ED163EED7"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_C7E88443_CA38_8E3E_41C9_36CF5F9E2228",
 "thumbnailUrl": "media/panorama_C7E88443_CA38_8E3E_41C9_36CF5F9E2228_t.jpg",
 "label": "dining",
 "pitch": 0,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_C7E88443_CA38_8E3E_41C9_36CF5F9E2228_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C7E88443_CA38_8E3E_41C9_36CF5F9E2228_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C7E88443_CA38_8E3E_41C9_36CF5F9E2228_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C7E88443_CA38_8E3E_41C9_36CF5F9E2228_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C7E88443_CA38_8E3E_41C9_36CF5F9E2228_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C7E88443_CA38_8E3E_41C9_36CF5F9E2228_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C7E88443_CA38_8E3E_41C9_36CF5F9E2228_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C7E88443_CA38_8E3E_41C9_36CF5F9E2228_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C7E88443_CA38_8E3E_41C9_36CF5F9E2228_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C7E88443_CA38_8E3E_41C9_36CF5F9E2228_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C7E88443_CA38_8E3E_41C9_36CF5F9E2228_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C7E88443_CA38_8E3E_41C9_36CF5F9E2228_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C7E88443_CA38_8E3E_41C9_36CF5F9E2228_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C7E88443_CA38_8E3E_41C9_36CF5F9E2228_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C7E88443_CA38_8E3E_41C9_36CF5F9E2228_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C7E88443_CA38_8E3E_41C9_36CF5F9E2228_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C7E88443_CA38_8E3E_41C9_36CF5F9E2228_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C7E88443_CA38_8E3E_41C9_36CF5F9E2228_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C7E88443_CA38_8E3E_41C9_36CF5F9E2228_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_D1D8F4FD_CA57_8FCA_41E3_16E6601977C4",
  "this.overlay_D1FBC690_CA57_8A5A_41E1_C8A3D24888F9",
  "this.overlay_D446D76B_CA57_8ACE_41E1_CF8D818C95A6",
  "this.overlay_D6725A11_CA58_9A5A_41E0_17C174E14A37"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 49.91,
  "pitch": 0
 },
 "id": "camera_FB8C4CE1_CA79_BFFA_41DC_C066AEA7A7B5",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 0.05,
   "backwardYaw": 1.1,
   "distance": 1,
   "panorama": "this.panorama_C40A7E82_CA38_FA3E_4190_25AC808FB8C9"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 53.79,
   "backwardYaw": 79.42,
   "distance": 1,
   "panorama": "this.panorama_C7E88443_CA38_8E3E_41C9_36CF5F9E2228"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_C43B5930_CA38_865A_41E1_0D875BCF0737",
 "thumbnailUrl": "media/panorama_C43B5930_CA38_865A_41E1_0D875BCF0737_t.jpg",
 "label": "living",
 "pitch": 0,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_C43B5930_CA38_865A_41E1_0D875BCF0737_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C43B5930_CA38_865A_41E1_0D875BCF0737_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C43B5930_CA38_865A_41E1_0D875BCF0737_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C43B5930_CA38_865A_41E1_0D875BCF0737_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C43B5930_CA38_865A_41E1_0D875BCF0737_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C43B5930_CA38_865A_41E1_0D875BCF0737_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C43B5930_CA38_865A_41E1_0D875BCF0737_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C43B5930_CA38_865A_41E1_0D875BCF0737_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C43B5930_CA38_865A_41E1_0D875BCF0737_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C43B5930_CA38_865A_41E1_0D875BCF0737_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C43B5930_CA38_865A_41E1_0D875BCF0737_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C43B5930_CA38_865A_41E1_0D875BCF0737_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C43B5930_CA38_865A_41E1_0D875BCF0737_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C43B5930_CA38_865A_41E1_0D875BCF0737_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C43B5930_CA38_865A_41E1_0D875BCF0737_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C43B5930_CA38_865A_41E1_0D875BCF0737_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C43B5930_CA38_865A_41E1_0D875BCF0737_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C43B5930_CA38_865A_41E1_0D875BCF0737_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C43B5930_CA38_865A_41E1_0D875BCF0737_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_D306DE76_CA49_BAC6_41E1_69AA38FE3B7E",
  "this.overlay_D09CA587_CA48_8E46_41C9_30A059C2E8C7"
 ]
},
{
 "class": "PlayList",
 "id": "mainPlayList",
 "items": [
  {
   "media": "this.panorama_C40A7E82_CA38_FA3E_4190_25AC808FB8C9",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_C40A7E82_CA38_FA3E_4190_25AC808FB8C9_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_C7E97391_CA38_8A5A_41E8_230F11E7E332",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_C7E97391_CA38_8A5A_41E8_230F11E7E332_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_C483C6C8_CA38_8BCB_41BE_653ED163EED7",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_C483C6C8_CA38_8BCB_41BE_653ED163EED7_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_C43B5930_CA38_865A_41E1_0D875BCF0737",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_C43B5930_CA38_865A_41E1_0D875BCF0737_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_C7E88443_CA38_8E3E_41C9_36CF5F9E2228",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_C7E88443_CA38_8E3E_41C9_36CF5F9E2228_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_C43FBF2B_CA38_BA4D_41D2_F228847F996B",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_C43FBF2B_CA38_BA4D_41D2_F228847F996B_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_C412F256_CA38_8AC6_41E5_DD84C806FD80",
   "class": "PanoramaPlayListItem",
   "end": "this.trigger('tourEnded')",
   "camera": "this.panorama_C412F256_CA38_8AC6_41E5_DD84C806FD80_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 0)",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_C43FBF2B_CA38_BA4D_41D2_F228847F996B_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -155.84,
  "pitch": 0
 },
 "id": "camera_F86E5D80_CA79_BE3A_41E8_A5F6DBCE7A89",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_C412F256_CA38_8AC6_41E5_DD84C806FD80_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 122.26,
  "pitch": 0
 },
 "id": "camera_FBB44D17_CA79_BE45_41D4_228B2E76EA44",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 66.49,
  "pitch": 0
 },
 "id": "camera_FB98ECC7_CA79_BFC6_41E3_3F81FE99D7DD",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -90.45,
  "pitch": 0
 },
 "id": "camera_FBC6CC36_CA79_BE46_4191_AF30A3295F3E",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_C7E88443_CA38_8E3E_41C9_36CF5F9E2228_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PlayList",
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "items": [
  {
   "media": "this.panorama_C40A7E82_CA38_FA3E_4190_25AC808FB8C9",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_C40A7E82_CA38_FA3E_4190_25AC808FB8C9_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_C7E97391_CA38_8A5A_41E8_230F11E7E332",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_C7E97391_CA38_8A5A_41E8_230F11E7E332_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_C483C6C8_CA38_8BCB_41BE_653ED163EED7",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_C483C6C8_CA38_8BCB_41BE_653ED163EED7_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_C43B5930_CA38_865A_41E1_0D875BCF0737",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_C43B5930_CA38_865A_41E1_0D875BCF0737_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_C7E88443_CA38_8E3E_41C9_36CF5F9E2228",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_C7E88443_CA38_8E3E_41C9_36CF5F9E2228_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_C43FBF2B_CA38_BA4D_41D2_F228847F996B",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_C43FBF2B_CA38_BA4D_41D2_F228847F996B_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_C412F256_CA38_8AC6_41E5_DD84C806FD80",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_C412F256_CA38_8AC6_41E5_DD84C806FD80_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 0)",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ]
},
{
 "gyroscopeEnabled": true,
 "class": "PanoramaPlayer",
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "buttonCardboardView": "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "displayPlaybackBar": true,
 "viewerArea": "this.MainViewer",
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "gyroscopeVerticalDraggingEnabled": true,
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "mouseControlMode": "drag_acceleration"
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 92.24,
   "backwardYaw": -68.67,
   "distance": 1,
   "panorama": "this.panorama_C40A7E82_CA38_FA3E_4190_25AC808FB8C9"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 86.46,
   "backwardYaw": -64.16,
   "distance": 1,
   "panorama": "this.panorama_C7E97391_CA38_8A5A_41E8_230F11E7E332"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 24.16,
   "backwardYaw": -113.51,
   "distance": 1,
   "panorama": "this.panorama_C7E88443_CA38_8E3E_41C9_36CF5F9E2228"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_C483C6C8_CA38_8BCB_41BE_653ED163EED7",
 "thumbnailUrl": "media/panorama_C483C6C8_CA38_8BCB_41BE_653ED163EED7_t.jpg",
 "label": "ent 2 din",
 "pitch": 0,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_C483C6C8_CA38_8BCB_41BE_653ED163EED7_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C483C6C8_CA38_8BCB_41BE_653ED163EED7_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C483C6C8_CA38_8BCB_41BE_653ED163EED7_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C483C6C8_CA38_8BCB_41BE_653ED163EED7_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C483C6C8_CA38_8BCB_41BE_653ED163EED7_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C483C6C8_CA38_8BCB_41BE_653ED163EED7_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C483C6C8_CA38_8BCB_41BE_653ED163EED7_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C483C6C8_CA38_8BCB_41BE_653ED163EED7_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C483C6C8_CA38_8BCB_41BE_653ED163EED7_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C483C6C8_CA38_8BCB_41BE_653ED163EED7_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C483C6C8_CA38_8BCB_41BE_653ED163EED7_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C483C6C8_CA38_8BCB_41BE_653ED163EED7_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C483C6C8_CA38_8BCB_41BE_653ED163EED7_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C483C6C8_CA38_8BCB_41BE_653ED163EED7_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C483C6C8_CA38_8BCB_41BE_653ED163EED7_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C483C6C8_CA38_8BCB_41BE_653ED163EED7_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C483C6C8_CA38_8BCB_41BE_653ED163EED7_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C483C6C8_CA38_8BCB_41BE_653ED163EED7_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C483C6C8_CA38_8BCB_41BE_653ED163EED7_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_D38F804B_CA48_86CD_41E5_D4578EC09220",
  "this.overlay_D24C1868_CA48_86CA_41DC_26DC75EF04E9",
  "this.overlay_D325B896_CA48_8646_41DB_5A016D45C61B"
 ]
},
{
 "displayOriginPosition": {
  "hfov": 165,
  "class": "RotationalCameraDisplayPosition",
  "yaw": 0,
  "stereographicFactor": 1,
  "pitch": -90
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_C40A7E82_CA38_FA3E_4190_25AC808FB8C9_camera",
 "displayMovements": [
  {
   "duration": 1000,
   "class": "TargetRotationalCameraDisplayMovement",
   "easing": "linear"
  },
  {
   "targetPitch": 0,
   "duration": 2000,
   "class": "TargetRotationalCameraDisplayMovement",
   "easing": "cubic_in_out",
   "targetStereographicFactor": 0
  }
 ],
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_C483C6C8_CA38_8BCB_41BE_653ED163EED7_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -126.21,
  "pitch": 0
 },
 "id": "camera_F87E0D70_CA79_BEDA_41B5_FAC23C494D89",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -87.76,
  "pitch": 0
 },
 "id": "camera_FBFC1C5F_CA79_BEC6_41CC_DC394BDA70CA",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 115.84,
  "pitch": 0
 },
 "id": "camera_FBE55CA4_CA79_BE7A_41DE_37D943366CF9",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "audio": {
  "class": "AudioResource",
  "mp3Url": "media/audio_E3588048_CA78_86CA_41DA_FB05399CF9E6.mp3",
  "oggUrl": "media/audio_E3588048_CA78_86CA_41DA_FB05399CF9E6.ogg"
 },
 "id": "audio_E3588048_CA78_86CA_41DA_FB05399CF9E6",
 "data": {
  "label": "abassel"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_C43B5930_CA38_865A_41E1_0D875BCF0737_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 89.55,
   "backwardYaw": -62.26,
   "distance": 1,
   "panorama": "this.panorama_C40A7E82_CA38_FA3E_4190_25AC808FB8C9"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -64.16,
   "backwardYaw": 86.46,
   "distance": 1,
   "panorama": "this.panorama_C483C6C8_CA38_8BCB_41BE_653ED163EED7"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_C7E97391_CA38_8A5A_41E8_230F11E7E332",
 "thumbnailUrl": "media/panorama_C7E97391_CA38_8A5A_41E8_230F11E7E332_t.jpg",
 "label": "ent 2",
 "pitch": 0,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_C7E97391_CA38_8A5A_41E8_230F11E7E332_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C7E97391_CA38_8A5A_41E8_230F11E7E332_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C7E97391_CA38_8A5A_41E8_230F11E7E332_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C7E97391_CA38_8A5A_41E8_230F11E7E332_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C7E97391_CA38_8A5A_41E8_230F11E7E332_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C7E97391_CA38_8A5A_41E8_230F11E7E332_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C7E97391_CA38_8A5A_41E8_230F11E7E332_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C7E97391_CA38_8A5A_41E8_230F11E7E332_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C7E97391_CA38_8A5A_41E8_230F11E7E332_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C7E97391_CA38_8A5A_41E8_230F11E7E332_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C7E97391_CA38_8A5A_41E8_230F11E7E332_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C7E97391_CA38_8A5A_41E8_230F11E7E332_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C7E97391_CA38_8A5A_41E8_230F11E7E332_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C7E97391_CA38_8A5A_41E8_230F11E7E332_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C7E97391_CA38_8A5A_41E8_230F11E7E332_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C7E97391_CA38_8A5A_41E8_230F11E7E332_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C7E97391_CA38_8A5A_41E8_230F11E7E332_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C7E97391_CA38_8A5A_41E8_230F11E7E332_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C7E97391_CA38_8A5A_41E8_230F11E7E332_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_D36B950E_CA39_8E46_4195_8F432CBDC229",
  "this.overlay_DD69F998_CA38_864A_4171_A08C79CD96F7"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -100.58,
  "pitch": 0
 },
 "id": "camera_FBDC7BFF_CA79_B9C6_41C2_CC432F0B9699",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 117.74,
  "pitch": 0
 },
 "id": "camera_FBAB0D3A_CA79_BE4E_41B6_86C0398FC169",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 1.1,
   "backwardYaw": 0.05,
   "distance": 1,
   "panorama": "this.panorama_C43B5930_CA38_865A_41E1_0D875BCF0737"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -62.26,
   "backwardYaw": 89.55,
   "distance": 1,
   "panorama": "this.panorama_C7E97391_CA38_8A5A_41E8_230F11E7E332"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -68.67,
   "backwardYaw": 92.24,
   "distance": 1,
   "panorama": "this.panorama_C483C6C8_CA38_8BCB_41BE_653ED163EED7"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_C40A7E82_CA38_FA3E_4190_25AC808FB8C9",
 "thumbnailUrl": "media/panorama_C40A7E82_CA38_FA3E_4190_25AC808FB8C9_t.jpg",
 "label": "entrance",
 "pitch": 0,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_C40A7E82_CA38_FA3E_4190_25AC808FB8C9_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C40A7E82_CA38_FA3E_4190_25AC808FB8C9_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C40A7E82_CA38_FA3E_4190_25AC808FB8C9_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C40A7E82_CA38_FA3E_4190_25AC808FB8C9_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C40A7E82_CA38_FA3E_4190_25AC808FB8C9_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C40A7E82_CA38_FA3E_4190_25AC808FB8C9_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C40A7E82_CA38_FA3E_4190_25AC808FB8C9_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C40A7E82_CA38_FA3E_4190_25AC808FB8C9_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C40A7E82_CA38_FA3E_4190_25AC808FB8C9_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C40A7E82_CA38_FA3E_4190_25AC808FB8C9_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C40A7E82_CA38_FA3E_4190_25AC808FB8C9_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C40A7E82_CA38_FA3E_4190_25AC808FB8C9_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C40A7E82_CA38_FA3E_4190_25AC808FB8C9_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C40A7E82_CA38_FA3E_4190_25AC808FB8C9_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C40A7E82_CA38_FA3E_4190_25AC808FB8C9_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C40A7E82_CA38_FA3E_4190_25AC808FB8C9_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C40A7E82_CA38_FA3E_4190_25AC808FB8C9_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C40A7E82_CA38_FA3E_4190_25AC808FB8C9_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C40A7E82_CA38_FA3E_4190_25AC808FB8C9_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_DE47FBF0_CA3B_99DA_41D3_45D4AE3F09DD",
  "this.overlay_DE873C26_CA3B_9E46_41D2_922921E2F15B",
  "this.overlay_E187C85A_CA48_86CE_41E1_97C296ECC337"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -179.95,
  "pitch": 0
 },
 "id": "camera_FBD50C1F_CA79_BE46_41DE_C037AF6AF481",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 111.33,
  "pitch": 0
 },
 "id": "camera_FBF00C7E_CA79_BEC6_41DE_5396C9C97BE9",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -93.54,
  "pitch": 0
 },
 "id": "camera_F85C3D50_CA79_BEDA_41CE_13F2ACFB8012",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -136.75,
  "pitch": 0
 },
 "id": "camera_FB835D00_CA79_BE3A_41E3_ACAA0E35956E",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -135.75,
  "pitch": 0
 },
 "id": "camera_F84C6D62_CA79_BEFE_41E2_97BEE905BB72",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -178.9,
  "pitch": 0
 },
 "id": "camera_FB27DBDF_CA79_B9C6_41E1_29904093DFDB",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 43.25,
   "backwardYaw": -130.09,
   "distance": 1,
   "panorama": "this.panorama_C43FBF2B_CA38_BA4D_41D2_F228847F996B"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_C412F256_CA38_8AC6_41E5_DD84C806FD80",
 "thumbnailUrl": "media/panorama_C412F256_CA38_8AC6_41E5_DD84C806FD80_t.jpg",
 "label": "kitchen",
 "pitch": 0,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_C412F256_CA38_8AC6_41E5_DD84C806FD80_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C412F256_CA38_8AC6_41E5_DD84C806FD80_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C412F256_CA38_8AC6_41E5_DD84C806FD80_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C412F256_CA38_8AC6_41E5_DD84C806FD80_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C412F256_CA38_8AC6_41E5_DD84C806FD80_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C412F256_CA38_8AC6_41E5_DD84C806FD80_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C412F256_CA38_8AC6_41E5_DD84C806FD80_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C412F256_CA38_8AC6_41E5_DD84C806FD80_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C412F256_CA38_8AC6_41E5_DD84C806FD80_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C412F256_CA38_8AC6_41E5_DD84C806FD80_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C412F256_CA38_8AC6_41E5_DD84C806FD80_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C412F256_CA38_8AC6_41E5_DD84C806FD80_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C412F256_CA38_8AC6_41E5_DD84C806FD80_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C412F256_CA38_8AC6_41E5_DD84C806FD80_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C412F256_CA38_8AC6_41E5_DD84C806FD80_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C412F256_CA38_8AC6_41E5_DD84C806FD80_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_C412F256_CA38_8AC6_41E5_DD84C806FD80_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C412F256_CA38_8AC6_41E5_DD84C806FD80_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C412F256_CA38_8AC6_41E5_DD84C806FD80_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_D547AB38_CA59_BA4A_41E4_C0A309DF5271"
 ]
},
{
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 5,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#FFFFFF",
 "id": "MainViewer",
 "left": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "width": "100%",
 "toolTipOpacity": 0.5,
 "toolTipFontSize": 13,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "minHeight": 50,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "paddingRight": 0,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 7,
 "minWidth": 100,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "shadow": false,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowOpacity": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "paddingLeft": 0,
 "transitionMode": "blending",
 "playbackBarHeadShadowHorizontalLength": 0,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "playbackBarBorderSize": 0,
 "toolTipFontFamily": "Georgia",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "borderSize": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "progressHeight": 10,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "top": 0,
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 7,
 "toolTipPaddingLeft": 10,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 10,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "class": "ViewerArea",
 "borderRadius": 0,
 "paddingBottom": 0,
 "toolTipBorderRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadHeight": 15,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "transitionDuration": 500,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "data": {
  "name": "--STICKER"
 },
 "children": [
  "this.Container_22BBC2F4_3075_D173_41B4_71F7A3560C34",
  "this.Container_22BBD2F4_3075_D173_41B4_8504C593E6BF",
  "this.Label_22BB22F4_3075_D173_41BB_3ACDC6CCCC83"
 ],
 "left": 70,
 "width": 550,
 "scrollBarColor": "#000000",
 "id": "Container_22BB12F4_3075_D173_4184_EC3BC4955417",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "layout": "absolute",
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "top": 34,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "contentOpaque": false,
 "verticalAlign": "top",
 "height": 98,
 "creationPolicy": "inAdvance",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "visible"
},
{
 "cursor": "hand",
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "width": 58,
 "transparencyActive": true,
 "right": "1.27%",
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "bottom": "2.51%",
 "minWidth": 1,
 "mode": "push",
 "verticalAlign": "middle",
 "height": 58,
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "paddingLeft": 0,
 "propagateClick": true,
 "data": {
  "name": "IconButton VR"
 }
},
{
 "data": {
  "name": "-- SETTINGS"
 },
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "width": 115.05,
 "scrollBarColor": "#000000",
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "layout": "absolute",
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "top": "0%",
 "scrollBarMargin": 2,
 "minWidth": 1,
 "contentOpaque": false,
 "verticalAlign": "top",
 "height": 641,
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "data": {
  "name": "--- LEFT PANEL 4 (Community)"
 },
 "children": [
  "this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4",
  "this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD"
 ],
 "left": "0%",
 "width": 330,
 "scrollBarColor": "#000000",
 "id": "Container_4041C033_7558_FB6E_41CE_BFE427F3AF92",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "layout": "absolute",
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "contentOpaque": false,
 "verticalAlign": "top",
 "height": "100%",
 "top": "0%",
 "creationPolicy": "inAdvance",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "--INFO photo"
 },
 "children": [
  "this.Container_062A782F_1140_E20B_41AF_B3E5DE341773",
  "this.Container_062A9830_1140_E215_41A7_5F2BBE5C20E4"
 ],
 "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "horizontalAlign": "left",
 "borderSize": 0,
 "paddingRight": 0,
 "bottom": "0%",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "creationPolicy": "inAdvance",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0.6,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "--PANORAMA LIST"
 },
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "horizontalAlign": "left",
 "borderSize": 0,
 "paddingRight": 0,
 "bottom": "0%",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "creationPolicy": "inAdvance",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0.6,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "--LOCATION"
 },
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "horizontalAlign": "left",
 "borderSize": 0,
 "paddingRight": 0,
 "bottom": "0%",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "creationPolicy": "inAdvance",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0.6,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "--FLOORPLAN"
 },
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "horizontalAlign": "left",
 "borderSize": 0,
 "paddingRight": 0,
 "bottom": "0%",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "creationPolicy": "inAdvance",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0.6,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "--PHOTOALBUM"
 },
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "horizontalAlign": "left",
 "borderSize": 0,
 "paddingRight": 0,
 "bottom": "0%",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "creationPolicy": "inAdvance",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0.6,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "--REALTOR"
 },
 "children": [
  "this.Container_1E19923C_57F1_802D_41C4_18DBE75E48C1",
  "this.Container_1E18A23C_57F1_802D_41B9_D08FA26C7F4C"
 ],
 "id": "Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#04A3E1",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "horizontalAlign": "left",
 "borderSize": 0,
 "paddingRight": 0,
 "bottom": "0%",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, false, 0, null, null, false)",
 "creationPolicy": "inAdvance",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0.6,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "data": {
  "name": "Container7538"
 },
 "children": [
  "this.Container_50F91F27_424B_0C40_41C3_4AC948480017",
  "this.Container_546964AC_4259_1C47_41B4_89BC8EEE450A"
 ],
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "id": "Container_50E57579_424B_1CC1_41C7_2A7D7DE232E6",
 "scrollBarVisible": "rollOver",
 "width": "5.247%",
 "layout": "absolute",
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "bottom": "3.14%",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "height": "43.457%",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "data": {
  "name": "Container4248"
 },
 "children": [
  "this.Container_4DF6648C_43C9_009F_41B4_06D470FF1669",
  "this.Container_4D37021E_43C9_03B8_41CC_28E8F98A7511"
 ],
 "left": "7.24%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "id": "Container_58B883FD_4396_7C5F_41B3_61F626F14414",
 "scrollBarVisible": "rollOver",
 "width": "76.357%",
 "layout": "absolute",
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "bottom": "3.04%",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "height": "76.859%",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "width": 58,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "transparencyActive": true,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "minWidth": 1,
 "mode": "toggle",
 "verticalAlign": "middle",
 "height": 58,
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "class": "IconButton",
 "paddingLeft": 0,
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "cursor": "hand",
 "propagateClick": true,
 "data": {
  "name": "IconButton FULLSCREEN"
 }
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "width": 58,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "transparencyActive": true,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "minWidth": 1,
 "mode": "toggle",
 "verticalAlign": "middle",
 "height": 58,
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "class": "IconButton",
 "paddingLeft": 0,
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "cursor": "hand",
 "propagateClick": true,
 "data": {
  "name": "IconButton MUTE"
 }
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 02c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.44,
   "image": "this.AnimatedImageResource_E767578B_CA4B_8A4E_41D1_A6C22C9C66D4",
   "pitch": -27.4,
   "yaw": -130.09,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_D621BDF7_CA5B_79C6_41D0_A01771D44D48",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C412F256_CA38_8AC6_41E5_DD84C806FD80, this.camera_FB835D00_CA79_BE3A_41E3_ACAA0E35956E); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 4.44,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -130.09,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C43FBF2B_CA38_BA4D_41D2_F228847F996B_0_HS_0_0_0_map.gif",
      "width": 72,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -27.4
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 02c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.64,
   "image": "this.AnimatedImageResource_E767378B_CA4B_8A4E_41E6_7E830D4CC2E5",
   "pitch": -21.87,
   "yaw": 44.25,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_D6CAA19C_CA5B_864A_41C3_FCDCF2BEB51E",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C7E88443_CA38_8E3E_41C9_36CF5F9E2228, this.camera_FBB44D17_CA79_BE45_41D4_228B2E76EA44); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 4.64,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 44.25,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C43FBF2B_CA38_BA4D_41D2_F228847F996B_0_HS_1_0_0_map.gif",
      "width": 72,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.87
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 02c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.7,
   "image": "this.AnimatedImageResource_E766C78B_CA4B_8A4E_41E5_92C57BACC4C1",
   "pitch": -19.86,
   "yaw": 73.39,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_D7819975_CA58_86DA_41E7_EFAE893A4D78",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 4.7,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 73.39,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C43FBF2B_CA38_BA4D_41D2_F228847F996B_0_HS_2_0_0_map.gif",
      "width": 72,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.86
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 02c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.72,
   "image": "this.AnimatedImageResource_E764F786_CA4B_8A46_41E1_189FF09ECEF5",
   "pitch": -19.36,
   "yaw": -57.74,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_D1D8F4FD_CA57_8FCA_41E3_16E6601977C4",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C43FBF2B_CA38_BA4D_41D2_F228847F996B, this.camera_F84C6D62_CA79_BEFE_41E2_97BEE905BB72); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 4.72,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -57.74,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C7E88443_CA38_8E3E_41C9_36CF5F9E2228_0_HS_0_0_0_map.gif",
      "width": 72,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.36
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 02c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.55,
   "image": "this.AnimatedImageResource_E764478B_CA4B_8A4E_41D7_C95EE88567E8",
   "pitch": -24.39,
   "yaw": -113.51,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_D1FBC690_CA57_8A5A_41E1_C8A3D24888F9",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C483C6C8_CA38_8BCB_41BE_653ED163EED7, this.camera_F86E5D80_CA79_BE3A_41E8_A5F6DBCE7A89); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 4.55,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -113.51,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C7E88443_CA38_8E3E_41C9_36CF5F9E2228_0_HS_1_0_0_map.gif",
      "width": 72,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.39
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 02c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.94,
   "image": "this.AnimatedImageResource_E764178B_CA4B_8A4E_4187_28F007D8E780",
   "pitch": -8.86,
   "yaw": 79.42,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_D446D76B_CA57_8ACE_41E1_CF8D818C95A6",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C43B5930_CA38_865A_41E1_0D875BCF0737, this.camera_F87E0D70_CA79_BEDA_41B5_FAC23C494D89); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 4.94,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 79.42,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C7E88443_CA38_8E3E_41C9_36CF5F9E2228_0_HS_2_0_0_map.gif",
      "width": 72,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.86
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 02c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.91,
   "image": "this.AnimatedImageResource_E767F78B_CA4B_8A4E_41B4_9DA83B5DEA65",
   "pitch": -10.82,
   "yaw": -55.48,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_D6725A11_CA58_9A5A_41E0_17C174E14A37",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 4.91,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -55.48,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C7E88443_CA38_8E3E_41C9_36CF5F9E2228_0_HS_3_0_0_map.gif",
      "width": 72,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.82
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 02c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.88,
   "image": "this.AnimatedImageResource_E7654786_CA4B_8A46_41C0_A95F69AF0A38",
   "pitch": -12.63,
   "yaw": 0.05,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_D306DE76_CA49_BAC6_41E1_69AA38FE3B7E",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C40A7E82_CA38_FA3E_4190_25AC808FB8C9, this.camera_FB27DBDF_CA79_B9C6_41E1_29904093DFDB); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 4.88,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0.05,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C43B5930_CA38_865A_41E1_0D875BCF0737_0_HS_0_0_0_map.gif",
      "width": 72,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.63
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 02c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.92,
   "image": "this.AnimatedImageResource_E7653786_CA4B_8A46_41E6_CDEAE1DE3AF7",
   "pitch": -10.24,
   "yaw": 53.79,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_D09CA587_CA48_8E46_41C9_30A059C2E8C7",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C7E88443_CA38_8E3E_41C9_36CF5F9E2228, this.camera_FBDC7BFF_CA79_B9C6_41C2_CC432F0B9699); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 4.92,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 53.79,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C43B5930_CA38_865A_41E1_0D875BCF0737_0_HS_1_0_0_map.gif",
      "width": 72,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.24
  }
 ]
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "width": 58,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "transparencyActive": true,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "minWidth": 1,
 "mode": "toggle",
 "verticalAlign": "middle",
 "height": 58,
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "class": "IconButton",
 "paddingLeft": 0,
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "cursor": "hand",
 "propagateClick": true,
 "data": {
  "name": "IconButton HS "
 }
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "width": 58,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "transparencyActive": true,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "minWidth": 1,
 "mode": "toggle",
 "verticalAlign": "middle",
 "height": 58,
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "class": "IconButton",
 "paddingLeft": 0,
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "cursor": "hand",
 "propagateClick": true,
 "data": {
  "name": "IconButton GYRO"
 }
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 02c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.45,
   "image": "this.AnimatedImageResource_E77A4780_CA4B_8A3A_41E8_F67326487F71",
   "pitch": -27.15,
   "yaw": 86.46,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_D38F804B_CA48_86CD_41E5_D4578EC09220",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C7E97391_CA38_8A5A_41E8_230F11E7E332, this.camera_FBE55CA4_CA79_BE7A_41DE_37D943366CF9); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 4.45,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 86.46,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C483C6C8_CA38_8BCB_41BE_653ED163EED7_0_HS_0_0_0_map.gif",
      "width": 72,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -27.15
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 02c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.88,
   "image": "this.AnimatedImageResource_E77A3780_CA4B_8A3A_41E3_76BA210073E4",
   "pitch": -12.83,
   "yaw": 92.24,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_D24C1868_CA48_86CA_41DC_26DC75EF04E9",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C40A7E82_CA38_FA3E_4190_25AC808FB8C9, this.camera_FBF00C7E_CA79_BEC6_41DE_5396C9C97BE9); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 4.88,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 92.24,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C483C6C8_CA38_8BCB_41BE_653ED163EED7_0_HS_1_0_0_map.gif",
      "width": 72,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.83
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 02c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.52,
   "image": "this.AnimatedImageResource_E7659786_CA4B_8A46_41BC_7136EC60BBAF",
   "pitch": -25.39,
   "yaw": 24.16,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_D325B896_CA48_8646_41DB_5A016D45C61B",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C7E88443_CA38_8E3E_41C9_36CF5F9E2228, this.camera_FB98ECC7_CA79_BFC6_41E3_3F81FE99D7DD); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 4.52,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 24.16,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C483C6C8_CA38_8BCB_41BE_653ED163EED7_0_HS_2_0_0_map.gif",
      "width": 72,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -25.39
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 02c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.59,
   "image": "this.AnimatedImageResource_E3638E80_CA79_7A3A_4197_A4D1F1DA3BDC",
   "pitch": -21.79,
   "yaw": -64.16,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_D36B950E_CA39_8E46_4195_8F432CBDC229",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C483C6C8_CA38_8BCB_41BE_653ED163EED7, this.camera_F85C3D50_CA79_BEDA_41CE_13F2ACFB8012); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 6.59,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -64.16,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C7E97391_CA38_8A5A_41E8_230F11E7E332_0_HS_0_0_0_map.gif",
      "width": 72,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.79
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 02c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.64,
   "image": "this.AnimatedImageResource_E3604E80_CA79_7A3A_41DA_733C4F7A4679",
   "pitch": -21.87,
   "yaw": 89.55,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_DD69F998_CA38_864A_4171_A08C79CD96F7",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C40A7E82_CA38_FA3E_4190_25AC808FB8C9, this.camera_FBAB0D3A_CA79_BE4E_41B6_86C0398FC169); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 4.64,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 89.55,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C7E97391_CA38_8A5A_41E8_230F11E7E332_0_HS_1_0_0_map.gif",
      "width": 72,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.87
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 02c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.87,
   "image": "this.AnimatedImageResource_E7785780_CA4B_8A3A_41E7_DA78148809C8",
   "pitch": -13.33,
   "yaw": -62.26,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_DE47FBF0_CA3B_99DA_41D3_45D4AE3F09DD",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C7E97391_CA38_8A5A_41E8_230F11E7E332, this.camera_FBC6CC36_CA79_BE46_4191_AF30A3295F3E); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 4.87,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -62.26,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C40A7E82_CA38_FA3E_4190_25AC808FB8C9_0_HS_0_0_0_map.gif",
      "width": 72,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.33
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 02c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.86,
   "image": "this.AnimatedImageResource_E77BB780_CA4B_8A3A_41DC_7982EC173BF3",
   "pitch": -13.45,
   "yaw": 1.1,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_DE873C26_CA3B_9E46_41D2_922921E2F15B",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C43B5930_CA38_865A_41E1_0D875BCF0737, this.camera_FBD50C1F_CA79_BE46_41DE_C037AF6AF481); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 4.86,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 1.1,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C40A7E82_CA38_FA3E_4190_25AC808FB8C9_0_HS_1_0_0_map.gif",
      "width": 72,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.45
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 02c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.94,
   "image": "this.AnimatedImageResource_E77B7780_CA4B_8A3A_41E3_FF6D9D378D3B",
   "pitch": -8.85,
   "yaw": -68.67,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E187C85A_CA48_86CE_41E1_97C296ECC337",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C483C6C8_CA38_8BCB_41BE_653ED163EED7, this.camera_FBFC1C5F_CA79_BEC6_41CC_DC394BDA70CA); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 4.94,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -68.67,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C40A7E82_CA38_FA3E_4190_25AC808FB8C9_0_HS_2_0_0_map.gif",
      "width": 72,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.85
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 02c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.47,
   "image": "this.AnimatedImageResource_E766B790_CA4B_8A5A_41E5_78A76A4CB83A",
   "pitch": -26.69,
   "yaw": 43.25,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_D547AB38_CA59_BA4A_41E4_C0A309DF5271",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C43FBF2B_CA38_BA4D_41D2_F228847F996B, this.camera_FB8C4CE1_CA79_BFFA_41DC_C066AEA7A7B5); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 4.47,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 43.25,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C412F256_CA38_8AC6_41E5_DD84C806FD80_0_HS_0_0_0_map.gif",
      "width": 72,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.69
  }
 ]
},
{
 "children": [
  "this.Image_4EE5F6BF_41A0_81CB_41B1_1DE1A6565D38"
 ],
 "id": "Container_22BBC2F4_3075_D173_41B4_71F7A3560C34",
 "left": "0.18%",
 "width": 314,
 "scrollBarColor": "#000000",
 "data": {
  "name": "white block"
 },
 "shadowColor": "#000000",
 "shadowVerticalLength": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "borderSize": 0,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "absolute",
 "verticalAlign": "top",
 "shadowBlurRadius": 7,
 "top": 0,
 "contentOpaque": false,
 "minWidth": 1,
 "shadowSpread": 1,
 "shadow": true,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "paddingTop": 0,
 "class": "Container",
 "height": 42,
 "gap": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "shadowHorizontalLength": 0,
 "propagateClick": true,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "children": [
  "this.Image_4ED9537E_41A1_874A_41C1_08E8B3C9B069",
  "this.Image_588A0363_41A0_877B_41C3_5D919767CB3D",
  "this.Image_5963ECFE_41A7_814A_41B1_28ADA8FA79F2",
  "this.Image_59FD31E7_41A1_837B_41CA_5FDA1A844094",
  "this.Image_5B84D225_41A1_80FE_4182_5744BD082173",
  "this.Image_5BF1307D_41E0_814E_41C3_7BE679482BFB"
 ],
 "id": "Container_22BBD2F4_3075_D173_41B4_8504C593E6BF",
 "left": 0,
 "width": 314,
 "scrollBarColor": "#000000",
 "data": {
  "name": "blue block"
 },
 "shadowColor": "#000000",
 "shadowVerticalLength": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "borderSize": 0,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "bottom": 1,
 "backgroundColor": [
  "#5CA1DE"
 ],
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "shadowBlurRadius": 7,
 "contentOpaque": false,
 "minWidth": 1,
 "shadowSpread": 1,
 "layout": "absolute",
 "shadow": true,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "paddingTop": 0,
 "class": "Container",
 "height": 53,
 "gap": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "visible": false,
 "shadowHorizontalLength": 0,
 "propagateClick": true,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0.01
 ]
},
{
 "fontFamily": "Oswald",
 "data": {
  "name": "text 1"
 },
 "left": 10,
 "width": 391,
 "id": "Label_22BB22F4_3075_D173_41BB_3ACDC6CCCC83",
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "text": "LOREM IPSUM",
 "fontColor": "#000000",
 "paddingRight": 0,
 "top": 0,
 "minWidth": 1,
 "verticalAlign": "top",
 "height": 75,
 "fontSize": 61,
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Label",
 "borderRadius": 0,
 "paddingBottom": 0,
 "textDecoration": "none",
 "paddingLeft": 0,
 "visible": false,
 "fontStyle": "italic",
 "propagateClick": true,
 "fontWeight": "bold"
},
{
 "data": {
  "name": "button menu sup"
 },
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "width": 110,
 "scrollBarColor": "#000000",
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "layout": "horizontal",
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "top": "0%",
 "scrollBarMargin": 2,
 "minWidth": 1,
 "contentOpaque": false,
 "verticalAlign": "middle",
 "height": 110,
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "visible"
},
{
 "data": {
  "name": "-button set"
 },
 "children": [
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.Image_4D3870DF_4257_15C2_41C3_D3DCF8869E88",
  "this.Image_5244FDC1_4259_0FC1_416D_239F8C833A78"
 ],
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "width": "91.304%",
 "layout": "vertical",
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "bottom": "0%",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "height": "85.959%",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 3,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "data": {
  "name": "- COLLAPSE"
 },
 "children": [
  "this.Container_21F34780_3014_BF93_41A2_9BF700588BEC",
  "this.IconButton_223F0171_3014_B375_41C1_61063C3D73B3"
 ],
 "left": "0%",
 "width": 66,
 "scrollBarColor": "#000000",
 "id": "Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "layout": "absolute",
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "contentOpaque": false,
 "verticalAlign": "top",
 "height": "100%",
 "top": "0%",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "data": {
  "name": "- EXPANDED"
 },
 "children": [
  "this.Container_4521E58D_74A8_853A_418A_CF7FF914DD83",
  "this.IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882",
  "this.HTMLText_4E82D1A1_41A0_83F6_41C1_8F0D3A250167"
 ],
 "width": 330,
 "scrollBarColor": "#000000",
 "id": "Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD",
 "scrollBarVisible": "rollOver",
 "right": 0,
 "scrollBarOpacity": 0.5,
 "layout": "absolute",
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "contentOpaque": false,
 "verticalAlign": "top",
 "height": "100%",
 "top": "0%",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "children": [
  "this.Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
  "this.Container_062A082F_1140_E20A_4193_DF1A4391DC79"
 ],
 "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
 "left": "15%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "shadowColor": "#000000",
 "shadowVerticalLength": 0,
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "overflow": "scroll",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "borderSize": 0,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "bottom": "10%",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "shadowBlurRadius": 25,
 "top": "10%",
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowSpread": 1,
 "layout": "horizontal",
 "shadow": true,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "shadowHorizontalLength": 0,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "data": {
  "name": "Container X global"
 },
 "children": [
  "this.IconButton_062A8830_1140_E215_419D_3439F16CCB3E"
 ],
 "left": "15%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "layout": "vertical",
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "right",
 "paddingRight": 20,
 "top": "10%",
 "bottom": "80%",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "shadow": false,
 "paddingTop": 20,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "shadowColor": "#000000",
 "shadowVerticalLength": 0,
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "overflow": "visible",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "borderSize": 0,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "bottom": "10%",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "shadowBlurRadius": 25,
 "top": "10%",
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowSpread": 1,
 "layout": "absolute",
 "shadow": true,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "shadowHorizontalLength": 0,
 "propagateClick": true,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "15%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "shadowColor": "#000000",
 "shadowVerticalLength": 0,
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "overflow": "scroll",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "borderSize": 0,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "bottom": "10%",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "shadowBlurRadius": 25,
 "top": "10%",
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowSpread": 1,
 "layout": "horizontal",
 "shadow": true,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "shadowHorizontalLength": 0,
 "propagateClick": true,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "data": {
  "name": "Container X global"
 },
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "left": "15%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "layout": "vertical",
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "right",
 "paddingRight": 20,
 "top": "10%",
 "bottom": "80%",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "shadow": false,
 "paddingTop": 20,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "visible"
},
{
 "children": [
  "this.MapViewer",
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C"
 ],
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "left": "15%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "shadowColor": "#000000",
 "shadowVerticalLength": 0,
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "overflow": "visible",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "borderSize": 0,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "bottom": "10%",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "shadowBlurRadius": 25,
 "top": "10%",
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowSpread": 1,
 "layout": "absolute",
 "shadow": true,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "shadowHorizontalLength": 0,
 "propagateClick": true,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "15%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "shadowColor": "#000000",
 "shadowVerticalLength": 0,
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "overflow": "visible",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "borderSize": 0,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "bottom": "10%",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "shadowBlurRadius": 25,
 "top": "10%",
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowSpread": 1,
 "layout": "vertical",
 "shadow": true,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "shadowHorizontalLength": 0,
 "propagateClick": true,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "children": [
  "this.Container_1E19E23C_57F1_802D_41D1_9B8B4D1D2BBD",
  "this.Container_1E19D23C_57F1_802D_41B0_92437DF80B82"
 ],
 "id": "Container_1E19923C_57F1_802D_41C4_18DBE75E48C1",
 "left": "15%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "shadowColor": "#000000",
 "shadowVerticalLength": 0,
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "overflow": "scroll",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "borderSize": 0,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "bottom": "10%",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "shadowBlurRadius": 25,
 "top": "10%",
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowSpread": 1,
 "layout": "horizontal",
 "shadow": true,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "shadowHorizontalLength": 0,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "data": {
  "name": "Container X global"
 },
 "children": [
  "this.IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF"
 ],
 "left": "15%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "id": "Container_1E18A23C_57F1_802D_41B9_D08FA26C7F4C",
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "layout": "vertical",
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "right",
 "paddingRight": 20,
 "top": "10%",
 "bottom": "80%",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "shadow": false,
 "paddingTop": 20,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "data": {
  "name": "Container8437"
 },
 "children": [
  "this.IconButton_2B90E40F_3593_B9CB_41B4_408768336038"
 ],
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "id": "Container_50F91F27_424B_0C40_41C3_4AC948480017",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "layout": "absolute",
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "bottom": "0%",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "height": "21.928%",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "data": {
  "name": "Container9886"
 },
 "children": [
  "this.Image_4D3C7CFD_4392_045F_41BD_B71D1DBE1518",
  "this.Image_4D2F7E58_4392_07A5_41C0_C535119A8467",
  "this.IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F"
 ],
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "id": "Container_546964AC_4259_1C47_41B4_89BC8EEE450A",
 "scrollBarVisible": "rollOver",
 "width": "71.91%",
 "layout": "absolute",
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "bottom": "23.39%",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "height": "48.2%",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "data": {
  "name": "Container3396"
 },
 "children": [
  "this.Image_5617B085_43AE_1CAE_41CC_8FF53A5EBA65"
 ],
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "id": "Container_4DF6648C_43C9_009F_41B4_06D470FF1669",
 "scrollBarVisible": "rollOver",
 "width": "66.351%",
 "layout": "absolute",
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "contentOpaque": false,
 "verticalAlign": "top",
 "height": "100%",
 "top": "0%",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "data": {
  "name": "Container3434"
 },
 "children": [
  "this.Image_58A0CA8B_4392_0CBA_41A3_BAE15310237F"
 ],
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "id": "Container_4D37021E_43C9_03B8_41CC_28E8F98A7511",
 "scrollBarVisible": "rollOver",
 "width": "77.883%",
 "layout": "absolute",
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "contentOpaque": false,
 "verticalAlign": "top",
 "height": "98.501%",
 "top": "0%",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E767578B_CA4B_8A4E_41D1_A6C22C9C66D4",
 "levels": [
  {
   "url": "media/panorama_C43FBF2B_CA38_BA4D_41D2_F228847F996B_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E767378B_CA4B_8A4E_41E6_7E830D4CC2E5",
 "levels": [
  {
   "url": "media/panorama_C43FBF2B_CA38_BA4D_41D2_F228847F996B_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E766C78B_CA4B_8A4E_41E5_92C57BACC4C1",
 "levels": [
  {
   "url": "media/panorama_C43FBF2B_CA38_BA4D_41D2_F228847F996B_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E764F786_CA4B_8A46_41E1_189FF09ECEF5",
 "levels": [
  {
   "url": "media/panorama_C7E88443_CA38_8E3E_41C9_36CF5F9E2228_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E764478B_CA4B_8A4E_41D7_C95EE88567E8",
 "levels": [
  {
   "url": "media/panorama_C7E88443_CA38_8E3E_41C9_36CF5F9E2228_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E764178B_CA4B_8A4E_4187_28F007D8E780",
 "levels": [
  {
   "url": "media/panorama_C7E88443_CA38_8E3E_41C9_36CF5F9E2228_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E767F78B_CA4B_8A4E_41B4_9DA83B5DEA65",
 "levels": [
  {
   "url": "media/panorama_C7E88443_CA38_8E3E_41C9_36CF5F9E2228_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E7654786_CA4B_8A46_41C0_A95F69AF0A38",
 "levels": [
  {
   "url": "media/panorama_C43B5930_CA38_865A_41E1_0D875BCF0737_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E7653786_CA4B_8A46_41E6_CDEAE1DE3AF7",
 "levels": [
  {
   "url": "media/panorama_C43B5930_CA38_865A_41E1_0D875BCF0737_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E77A4780_CA4B_8A3A_41E8_F67326487F71",
 "levels": [
  {
   "url": "media/panorama_C483C6C8_CA38_8BCB_41BE_653ED163EED7_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E77A3780_CA4B_8A3A_41E3_76BA210073E4",
 "levels": [
  {
   "url": "media/panorama_C483C6C8_CA38_8BCB_41BE_653ED163EED7_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E7659786_CA4B_8A46_41BC_7136EC60BBAF",
 "levels": [
  {
   "url": "media/panorama_C483C6C8_CA38_8BCB_41BE_653ED163EED7_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E3638E80_CA79_7A3A_4197_A4D1F1DA3BDC",
 "levels": [
  {
   "url": "media/panorama_C7E97391_CA38_8A5A_41E8_230F11E7E332_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E3604E80_CA79_7A3A_41DA_733C4F7A4679",
 "levels": [
  {
   "url": "media/panorama_C7E97391_CA38_8A5A_41E8_230F11E7E332_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E7785780_CA4B_8A3A_41E7_DA78148809C8",
 "levels": [
  {
   "url": "media/panorama_C40A7E82_CA38_FA3E_4190_25AC808FB8C9_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E77BB780_CA4B_8A3A_41DC_7982EC173BF3",
 "levels": [
  {
   "url": "media/panorama_C40A7E82_CA38_FA3E_4190_25AC808FB8C9_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E77B7780_CA4B_8A3A_41E3_FF6D9D378D3B",
 "levels": [
  {
   "url": "media/panorama_C40A7E82_CA38_FA3E_4190_25AC808FB8C9_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E766B790_CA4B_8A5A_41E5_78A76A4CB83A",
 "levels": [
  {
   "url": "media/panorama_C412F256_CA38_8AC6_41E5_DD84C806FD80_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "maxHeight": 59,
 "maxWidth": 635,
 "id": "Image_4EE5F6BF_41A0_81CB_41B1_1DE1A6565D38",
 "left": "0%",
 "width": "100%",
 "borderSize": 0,
 "url": "skin/Image_4EE5F6BF_41A0_81CB_41B1_1DE1A6565D38.png",
 "minHeight": 1,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "bottom": "8.75%",
 "minWidth": 1,
 "verticalAlign": "middle",
 "height": "67.391%",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Image",
 "borderRadius": 0,
 "paddingBottom": 0,
 "scaleMode": "fit_inside",
 "paddingLeft": 0,
 "visible": false,
 "propagateClick": false,
 "data": {
  "name": "ministry of revenue"
 }
},
{
 "maxHeight": 59,
 "maxWidth": 167,
 "id": "Image_4ED9537E_41A1_874A_41C1_08E8B3C9B069",
 "left": "0%",
 "width": "32.903%",
 "borderSize": 0,
 "url": "skin/Image_4ED9537E_41A1_874A_41C1_08E8B3C9B069.png",
 "minHeight": 1,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "top": "19.43%",
 "minWidth": 1,
 "verticalAlign": "middle",
 "height": "60.377%",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Image",
 "borderRadius": 0,
 "paddingBottom": 0,
 "scaleMode": "fit_inside",
 "paddingLeft": 0,
 "visible": false,
 "propagateClick": false,
 "data": {
  "name": "Image5496"
 }
},
{
 "maxHeight": 59,
 "maxWidth": 469,
 "id": "Image_588A0363_41A0_877B_41C3_5D919767CB3D",
 "left": "0%",
 "width": "79.355%",
 "borderSize": 0,
 "url": "skin/Image_588A0363_41A0_877B_41C3_5D919767CB3D.png",
 "minHeight": 1,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "top": "0%",
 "minWidth": 1,
 "verticalAlign": "middle",
 "height": "98.113%",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Image",
 "borderRadius": 0,
 "paddingBottom": 0,
 "scaleMode": "fit_inside",
 "paddingLeft": 0,
 "visible": false,
 "propagateClick": false,
 "data": {
  "name": "Image11167"
 }
},
{
 "maxHeight": 59,
 "maxWidth": 880,
 "id": "Image_5963ECFE_41A7_814A_41B1_28ADA8FA79F2",
 "left": "0%",
 "width": "100%",
 "borderSize": 0,
 "url": "skin/Image_5963ECFE_41A7_814A_41B1_28ADA8FA79F2.png",
 "minHeight": 1,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "top": "0%",
 "minWidth": 1,
 "verticalAlign": "middle",
 "height": "94.34%",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Image",
 "borderRadius": 0,
 "paddingBottom": 0,
 "scaleMode": "fit_inside",
 "paddingLeft": 0,
 "visible": false,
 "propagateClick": false,
 "data": {
  "name": "Image11246"
 }
},
{
 "maxHeight": 59,
 "maxWidth": 321,
 "id": "Image_59FD31E7_41A1_837B_41CA_5FDA1A844094",
 "left": "0%",
 "width": "46.774%",
 "borderSize": 0,
 "url": "skin/Image_59FD31E7_41A1_837B_41CA_5FDA1A844094.png",
 "minHeight": 1,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "top": "20.75%",
 "minWidth": 1,
 "verticalAlign": "middle",
 "height": "47.17%",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Image",
 "borderRadius": 0,
 "paddingBottom": 0,
 "scaleMode": "fit_inside",
 "paddingLeft": 0,
 "visible": false,
 "propagateClick": false,
 "data": {
  "name": "Image11319"
 }
},
{
 "maxHeight": 59,
 "maxWidth": 395,
 "id": "Image_5B84D225_41A1_80FE_4182_5744BD082173",
 "left": "0%",
 "width": "50.645%",
 "borderSize": 0,
 "url": "skin/Image_5B84D225_41A1_80FE_4182_5744BD082173.png",
 "minHeight": 1,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "top": "16.98%",
 "minWidth": 1,
 "verticalAlign": "middle",
 "height": "49.057%",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Image",
 "borderRadius": 0,
 "paddingBottom": 0,
 "scaleMode": "fit_inside",
 "paddingLeft": 0,
 "visible": false,
 "propagateClick": false,
 "data": {
  "name": "Image11499"
 }
},
{
 "maxHeight": 59,
 "maxWidth": 396,
 "id": "Image_5BF1307D_41E0_814E_41C3_7BE679482BFB",
 "left": "0%",
 "width": "53.226%",
 "borderSize": 0,
 "url": "skin/Image_5BF1307D_41E0_814E_41C3_7BE679482BFB.png",
 "minHeight": 1,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "top": "11.32%",
 "minWidth": 1,
 "verticalAlign": "middle",
 "height": "62.264%",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Image",
 "borderRadius": 0,
 "paddingBottom": 0,
 "scaleMode": "fit_inside",
 "paddingLeft": 0,
 "visible": false,
 "propagateClick": false,
 "data": {
  "name": "Image11621"
 }
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "width": 60,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "transparencyActive": true,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "minWidth": 1,
 "mode": "toggle",
 "verticalAlign": "middle",
 "height": 60,
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "class": "IconButton",
 "paddingLeft": 0,
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "cursor": "hand",
 "propagateClick": true,
 "data": {
  "name": "image button menu"
 }
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "width": "45.71%",
 "id": "Image_4D3870DF_4257_15C2_41C3_D3DCF8869E88",
 "borderSize": 0,
 "url": "skin/Image_4D3870DF_4257_15C2_41C3_D3DCF8869E88.png",
 "minHeight": 1,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "minWidth": 1,
 "verticalAlign": "middle",
 "height": "10.163%",
 "click": "this.openLink('http://https://www.instagram.com/mellacreatives/', '_blank')",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "class": "Image",
 "scaleMode": "fit_inside",
 "paddingLeft": 0,
 "cursor": "hand",
 "propagateClick": true,
 "data": {
  "name": "Image5138"
 }
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "width": "100%",
 "id": "Image_5244FDC1_4259_0FC1_416D_239F8C833A78",
 "borderSize": 0,
 "url": "skin/Image_5244FDC1_4259_0FC1_416D_239F8C833A78.png",
 "minHeight": 1,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "minWidth": 1,
 "verticalAlign": "middle",
 "height": "8.167%",
 "click": "this.openLink('http://https://www.linkedin.com/company/mella-creative-studio/', '_blank')",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "class": "Image",
 "scaleMode": "fit_inside",
 "paddingLeft": 0,
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "Image4905"
 }
},
{
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "Container black"
 },
 "id": "Container_21F34780_3014_BF93_41A2_9BF700588BEC",
 "left": "0%",
 "width": 36,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "horizontalAlign": "left",
 "borderSize": 0,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "contentOpaque": false,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000"
 ],
 "top": "0%",
 "height": "100%",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0.4,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "cursor": "hand",
 "maxHeight": 80,
 "maxWidth": 80,
 "id": "IconButton_223F0171_3014_B375_41C1_61063C3D73B3",
 "left": 10,
 "width": 50,
 "transparencyActive": true,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "bottom": "40%",
 "top": "40%",
 "mode": "push",
 "verticalAlign": "middle",
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, false, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, false, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, true, 0, null, null, false)",
 "iconURL": "skin/IconButton_223F0171_3014_B375_41C1_61063C3D73B3.png",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_223F0171_3014_B375_41C1_61063C3D73B3_rollover.png",
 "paddingLeft": 0,
 "propagateClick": true,
 "data": {
  "name": "IconButton arrow"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container"
 },
 "children": [
  "this.Container_0B85764A_2D07_4D95_41A5_3AC872515A8C"
 ],
 "id": "Container_4521E58D_74A8_853A_418A_CF7FF914DD83",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "90%",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "horizontalAlign": "left",
 "borderSize": 0,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "contentOpaque": false,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "top": "0%",
 "height": "100%",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0.3,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "cursor": "hand",
 "maxHeight": 50,
 "maxWidth": 50,
 "id": "IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882",
 "width": 50,
 "transparencyActive": true,
 "right": 9,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "bottom": "40%",
 "top": "40%",
 "mode": "push",
 "verticalAlign": "middle",
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false)",
 "iconURL": "skin/IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882.png",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882_rollover.png",
 "paddingLeft": 0,
 "propagateClick": true,
 "data": {
  "name": "IconButton collapse"
 }
},
{
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "id": "HTMLText_4E82D1A1_41A0_83F6_41C1_8F0D3A250167",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "width": "30.303%",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 10,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "height": "5.236%",
 "top": "5.97%",
 "shadow": false,
 "paddingTop": 10,
 "backgroundOpacity": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:1.05vmin;\"><BR STYLE=\"letter-spacing:0vmin;color:#000000;font-size:1.05vmin;font-family:'Segoe UI';\"/></p></div>",
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingBottom": 10,
 "paddingLeft": 10,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "HTMLText5367"
 }
},
{
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "-left"
 },
 "children": [
  "this.Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A"
 ],
 "id": "Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "85%",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "horizontalAlign": "center",
 "borderSize": 0,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "contentOpaque": false,
 "verticalAlign": "middle",
 "backgroundColor": [
  "#000000"
 ],
 "height": "100%",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 1,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "-right"
 },
 "children": [
  "this.Container_062A3830_1140_E215_4195_1698933FE51C",
  "this.Container_062A2830_1140_E215_41AA_EB25B7BD381C",
  "this.Container_062AE830_1140_E215_4180_196ED689F4BD"
 ],
 "id": "Container_062A082F_1140_E20A_4193_DF1A4391DC79",
 "scrollBarOpacity": 0.51,
 "scrollBarColor": "#0069A3",
 "scrollBarVisible": "rollOver",
 "width": "50%",
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "horizontalAlign": "left",
 "borderSize": 0,
 "paddingRight": 50,
 "scrollBarMargin": 2,
 "minWidth": 460,
 "contentOpaque": false,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "height": "100%",
 "shadow": false,
 "paddingTop": 20,
 "backgroundOpacity": 1,
 "class": "Container",
 "borderRadius": 0,
 "gap": 0,
 "paddingBottom": 20,
 "paddingLeft": 50,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "width": "25%",
 "id": "IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
 "transparencyActive": false,
 "borderSize": 0,
 "minHeight": 50,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "minWidth": 50,
 "mode": "push",
 "verticalAlign": "middle",
 "height": "75%",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "iconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg",
 "class": "IconButton",
 "paddingLeft": 0,
 "pressedIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed.jpg",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "X"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "header"
 },
 "children": [
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "horizontalAlign": "left",
 "borderSize": 0,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "verticalAlign": "top",
 "minWidth": 1,
 "height": 140,
 "shadow": false,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "itemMode": "normal",
 "left": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#04A3E1",
 "itemLabelFontStyle": "italic",
 "scrollBarVisible": "rollOver",
 "itemLabelHorizontalAlign": "center",
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "itemThumbnailOpacity": 1,
 "width": "100%",
 "itemPaddingRight": 3,
 "horizontalAlign": "center",
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "minHeight": 1,
 "itemMaxHeight": 1000,
 "itemMaxWidth": 1000,
 "itemLabelFontFamily": "Oswald",
 "selectedItemThumbnailShadowBlurRadius": 16,
 "paddingRight": 70,
 "minWidth": 1,
 "height": "92%",
 "itemPaddingLeft": 3,
 "selectedItemLabelFontColor": "#04A3E1",
 "verticalAlign": "middle",
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "shadow": false,
 "itemHorizontalAlign": "center",
 "itemLabelPosition": "bottom",
 "backgroundOpacity": 0,
 "itemBorderRadius": 0,
 "itemBackgroundOpacity": 0,
 "itemThumbnailBorderRadius": 0,
 "itemOpacity": 1,
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "itemPaddingTop": 3,
 "itemBackgroundColor": [],
 "paddingLeft": 70,
 "propagateClick": true,
 "itemBackgroundColorRatios": [],
 "itemWidth": 220,
 "selectedItemThumbnailShadow": true,
 "itemMinHeight": 50,
 "borderSize": 0,
 "selectedItemLabelFontWeight": "bold",
 "itemLabelFontWeight": "normal",
 "itemLabelTextDecoration": "none",
 "rollOverItemLabelFontColor": "#04A3E1",
 "rollOverItemThumbnailShadow": true,
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "bottom": -0.2,
 "itemLabelFontSize": 16,
 "itemVerticalAlign": "top",
 "itemMinWidth": 50,
 "scrollBarMargin": 2,
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "itemLabelFontColor": "#666666",
 "itemThumbnailScaleMode": "fit_outside",
 "itemHeight": 160,
 "itemThumbnailHeight": 125,
 "paddingTop": 10,
 "itemBackgroundColorDirection": "vertical",
 "class": "ThumbnailGrid",
 "borderRadius": 5,
 "gap": 26,
 "paddingBottom": 70,
 "itemLabelGap": 7,
 "itemThumbnailShadow": false,
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "itemThumbnailWidth": 220,
 "itemPaddingBottom": 3,
 "selectedItemThumbnailShadowVerticalLength": 0,
 "data": {
  "name": "ThumbnailList"
 },
 "scrollBarWidth": 10
},
{
 "backgroundColorRatios": [
  0
 ],
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14377.55330038866!2d-73.99492968084243!3d40.75084469078082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9f775f259%3A0x999668d0d7c3fd7d!2s400+5th+Ave%2C+New+York%2C+NY+10018!5e0!3m2!1ses!2sus!4v1467271743182\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen>",
 "minHeight": 1,
 "scrollEnabled": true,
 "borderSize": 0,
 "paddingRight": 0,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "height": "100%",
 "shadow": false,
 "insetBorder": false,
 "paddingTop": 0,
 "backgroundOpacity": 1,
 "class": "WebFrame",
 "borderRadius": 0,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "propagateClick": true,
 "data": {
  "name": "WebFrame"
 }
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "width": "25%",
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "transparencyActive": false,
 "borderSize": 0,
 "minHeight": 50,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "minWidth": 50,
 "mode": "push",
 "verticalAlign": "middle",
 "height": "75%",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "class": "IconButton",
 "paddingLeft": 0,
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "cursor": "hand",
 "propagateClick": true,
 "data": {
  "name": "X"
 }
},
{
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#FFFFFF",
 "id": "MapViewer",
 "left": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "width": "100%",
 "toolTipOpacity": 1,
 "toolTipFontSize": 12,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "minHeight": 1,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "paddingRight": 0,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "minWidth": 1,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "shadow": false,
 "playbackBarBorderRadius": 0,
 "height": "99.975%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "paddingLeft": 0,
 "transitionMode": "blending",
 "toolTipShadowHorizontalLength": 0,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "playbackBarBorderSize": 0,
 "toolTipFontFamily": "Arial",
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "borderSize": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "progressHeight": 10,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "top": 0,
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "class": "ViewerArea",
 "borderRadius": 0,
 "paddingBottom": 0,
 "toolTipBorderRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadHeight": 15,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "transitionDuration": 500,
 "data": {
  "name": "Floor Plan"
 }
},
{
 "data": {
  "name": "header"
 },
 "children": [
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "layout": "absolute",
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "contentOpaque": false,
 "verticalAlign": "top",
 "height": 140,
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container photo"
 },
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "horizontalAlign": "left",
 "borderSize": 0,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "contentOpaque": false,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "height": "100%",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0.3,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "visible"
},
{
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "-left"
 },
 "children": [
  "this.Image_1E19C23C_57F1_802D_41D1_9DC72DB5C1E1"
 ],
 "id": "Container_1E19E23C_57F1_802D_41D1_9B8B4D1D2BBD",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "55%",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "horizontalAlign": "center",
 "borderSize": 0,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "contentOpaque": false,
 "verticalAlign": "middle",
 "backgroundColor": [
  "#000000"
 ],
 "height": "100%",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 1,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "-right"
 },
 "children": [
  "this.Container_1E18223C_57F1_802D_41D5_C1ECF1EB519F",
  "this.Container_1E18323C_57F1_802D_41AC_3EB4DE555BBC",
  "this.Container_1E18523C_57F1_802D_41B1_88C86CD9A273"
 ],
 "id": "Container_1E19D23C_57F1_802D_41B0_92437DF80B82",
 "scrollBarOpacity": 0.51,
 "scrollBarColor": "#0069A3",
 "scrollBarVisible": "rollOver",
 "width": "45%",
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "horizontalAlign": "left",
 "borderSize": 0,
 "paddingRight": 60,
 "scrollBarMargin": 2,
 "minWidth": 460,
 "contentOpaque": false,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "height": "100%",
 "shadow": false,
 "paddingTop": 20,
 "backgroundOpacity": 1,
 "class": "Container",
 "borderRadius": 0,
 "gap": 0,
 "paddingBottom": 20,
 "paddingLeft": 60,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "width": "25%",
 "id": "IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF",
 "transparencyActive": false,
 "borderSize": 0,
 "minHeight": 50,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "minWidth": 50,
 "mode": "push",
 "verticalAlign": "middle",
 "height": "75%",
 "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, false, 0, null, null, false)",
 "iconURL": "skin/IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF.jpg",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF_rollover.jpg",
 "class": "IconButton",
 "paddingLeft": 0,
 "pressedIconURL": "skin/IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF_pressed.jpg",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "X"
 }
},
{
 "cursor": "hand",
 "maxHeight": 101,
 "maxWidth": 101,
 "id": "IconButton_2B90E40F_3593_B9CB_41B4_408768336038",
 "left": "7.87%",
 "width": 71,
 "transparencyActive": true,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "bottom": "1.5%",
 "minWidth": 1,
 "mode": "toggle",
 "verticalAlign": "middle",
 "height": 61,
 "click": "if(!this.Container_546964AC_4259_1C47_41B4_89BC8EEE450A.get('visible')){ this.setComponentVisibility(this.Container_546964AC_4259_1C47_41B4_89BC8EEE450A, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_546964AC_4259_1C47_41B4_89BC8EEE450A, false, 0, null, null, false) }",
 "iconURL": "skin/IconButton_2B90E40F_3593_B9CB_41B4_408768336038.png",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_2B90E40F_3593_B9CB_41B4_408768336038_rollover.png",
 "paddingLeft": 0,
 "propagateClick": true,
 "data": {
  "name": "IconButton Info"
 }
},
{
 "maxHeight": 84,
 "maxWidth": 84,
 "id": "Image_4D3C7CFD_4392_045F_41BD_B71D1DBE1518",
 "width": "60.938%",
 "right": "3.13%",
 "borderSize": 0,
 "url": "skin/Image_4D3C7CFD_4392_045F_41BD_B71D1DBE1518.png",
 "minHeight": 1,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "top": "3.5%",
 "minWidth": 1,
 "verticalAlign": "middle",
 "height": "42.529%",
 "click": "this.openLink('http://mella@mella-cs.com', '_blank')",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Image",
 "borderRadius": 0,
 "paddingBottom": 0,
 "scaleMode": "fit_inside",
 "paddingLeft": 0,
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "Image2783"
 }
},
{
 "cursor": "hand",
 "maxHeight": 84,
 "maxWidth": 84,
 "id": "Image_4D2F7E58_4392_07A5_41C0_C535119A8467",
 "width": "57.813%",
 "right": "4.69%",
 "borderSize": 0,
 "url": "skin/Image_4D2F7E58_4392_07A5_41C0_C535119A8467.png",
 "minHeight": 1,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "bottom": "30.53%",
 "minWidth": 1,
 "verticalAlign": "middle",
 "height": "28.5%",
 "click": "this.openLink('http://mella-cs.com', '_blank')",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Image",
 "borderRadius": 0,
 "paddingBottom": 0,
 "scaleMode": "fit_inside",
 "paddingLeft": 0,
 "propagateClick": false,
 "data": {
  "name": "Image2877"
 }
},
{
 "cursor": "hand",
 "maxHeight": 101,
 "maxWidth": 101,
 "id": "IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F",
 "width": 44,
 "transparencyActive": false,
 "right": "0%",
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "bottom": "4.5%",
 "minWidth": 1,
 "mode": "push",
 "verticalAlign": "middle",
 "height": 44,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, true, 0, null, null, false); this.openLink('http://https://maps.google.com/maps?q=8.998697,38.747010&ll=8.998697,38.747010&z=16', '_blank')",
 "iconURL": "skin/IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F.png",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F_rollover.png",
 "paddingLeft": 0,
 "propagateClick": false,
 "data": {
  "name": "IconButton Location"
 }
},
{
 "maxHeight": 998,
 "maxWidth": 1202,
 "id": "Image_5617B085_43AE_1CAE_41CC_8FF53A5EBA65",
 "left": "0%",
 "width": "6.786%",
 "borderSize": 0,
 "url": "skin/Image_5617B085_43AE_1CAE_41CC_8FF53A5EBA65.png",
 "minHeight": 1,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "bottom": "1.63%",
 "minWidth": 1,
 "verticalAlign": "middle",
 "height": "5.865%",
 "click": "if(!this.Container_4D37021E_43C9_03B8_41CC_28E8F98A7511.get('visible')){ this.setComponentVisibility(this.Container_4D37021E_43C9_03B8_41CC_28E8F98A7511, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_4D37021E_43C9_03B8_41CC_28E8F98A7511, false, 0, null, null, false) }",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Image",
 "borderRadius": 0,
 "paddingBottom": 0,
 "scaleMode": "fit_inside",
 "paddingLeft": 0,
 "propagateClick": true,
 "data": {
  "name": "Image3661"
 }
},
{
 "maxHeight": 1185,
 "maxWidth": 1012,
 "id": "Image_58A0CA8B_4392_0CBA_41A3_BAE15310237F",
 "left": "0%",
 "width": "100%",
 "borderSize": 0,
 "url": "skin/Image_58A0CA8B_4392_0CBA_41A3_BAE15310237F.png",
 "minHeight": 1,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "top": "0%",
 "minWidth": 1,
 "verticalAlign": "middle",
 "height": "100%",
 "click": "this.setComponentVisibility(this.Container_4D37021E_43C9_03B8_41CC_28E8F98A7511, false, 0, null, null, false)",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Image",
 "borderRadius": 0,
 "paddingBottom": 0,
 "scaleMode": "fit_inside",
 "paddingLeft": 0,
 "propagateClick": false,
 "data": {
  "name": "Image4301"
 }
},
{
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "- Buttons set"
 },
 "children": [
  "this.Image_0435F73B_2D0F_4BF4_4181_65F86A8DAC19",
  "this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE",
  "this.Container_19256A12_2D07_45B5_41AB_E9DE96B2DFF3",
  "this.Container_2A2CB53C_310E_0014_41C3_AB834B10253B",
  "this.Container_159EADDD_31FA_0014_41C8_8A5203EC627B",
  "this.Container_17569D7D_31FA_0015_41C4_CBC688763A8D",
  "this.Container_1758A215_31FA_0014_41B6_9A4A5384548B",
  "this.Container_17EBA2B7_3106_0014_41A9_D6C96D0633AE",
  "this.Container_168D8311_3106_01EC_41B0_F2D40886AB88"
 ],
 "id": "Container_0B85764A_2D07_4D95_41A5_3AC872515A8C",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "horizontalAlign": "left",
 "borderSize": 0,
 "paddingRight": 40,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "contentOpaque": false,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000"
 ],
 "top": "0%",
 "height": "100%",
 "shadow": false,
 "paddingTop": 40,
 "backgroundOpacity": 0.7,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 40,
 "paddingLeft": 40,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "maxHeight": 1000,
 "maxWidth": 2000,
 "id": "Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A",
 "left": "0%",
 "width": "100%",
 "borderSize": 0,
 "url": "skin/Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A.jpg",
 "minHeight": 1,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "top": "0%",
 "minWidth": 1,
 "verticalAlign": "middle",
 "height": "100%",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Image",
 "borderRadius": 0,
 "paddingBottom": 0,
 "scaleMode": "fit_outside",
 "paddingLeft": 0,
 "propagateClick": false,
 "data": {
  "name": "Image"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container space"
 },
 "id": "Container_062A3830_1140_E215_4195_1698933FE51C",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "minHeight": 0,
 "horizontalAlign": "right",
 "borderSize": 0,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "verticalAlign": "top",
 "minWidth": 1,
 "height": 60,
 "shadow": false,
 "backgroundOpacity": 0.3,
 "paddingTop": 20,
 "class": "Container",
 "borderRadius": 0,
 "gap": 0,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container text"
 },
 "children": [
  "this.HTMLText_062AD830_1140_E215_41B0_321699661E7F",
  "this.Button_062AF830_1140_E215_418D_D2FC11B12C47"
 ],
 "id": "Container_062A2830_1140_E215_41AA_EB25B7BD381C",
 "scrollBarOpacity": 0.79,
 "scrollBarColor": "#E73B2C",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "minHeight": 520,
 "horizontalAlign": "left",
 "borderSize": 0,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "minWidth": 100,
 "contentOpaque": false,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "height": "100%",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0.3,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 30,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container space"
 },
 "id": "Container_062AE830_1140_E215_4180_196ED689F4BD",
 "width": 370,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "horizontalAlign": "left",
 "borderSize": 0,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "verticalAlign": "top",
 "minWidth": 1,
 "height": 40,
 "shadow": false,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "width": "100%",
 "transparencyActive": false,
 "right": 20,
 "borderSize": 0,
 "minHeight": 50,
 "horizontalAlign": "right",
 "paddingRight": 0,
 "top": 20,
 "minWidth": 50,
 "mode": "push",
 "verticalAlign": "top",
 "height": "36.14%",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "paddingLeft": 0,
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "cursor": "hand",
 "propagateClick": true,
 "data": {
  "name": "IconButton X"
 }
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "width": "100%",
 "transparencyActive": false,
 "right": 20,
 "borderSize": 0,
 "minHeight": 50,
 "horizontalAlign": "right",
 "paddingRight": 0,
 "top": 20,
 "minWidth": 50,
 "mode": "push",
 "verticalAlign": "top",
 "height": "36.14%",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
 "paddingLeft": 0,
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
 "cursor": "hand",
 "propagateClick": true,
 "data": {
  "name": "IconButton X"
 }
},
{
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#FFFFFF",
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "left": "0%",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "width": "100%",
 "toolTipOpacity": 1,
 "toolTipFontSize": 12,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "minHeight": 1,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "paddingRight": 0,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "minWidth": 1,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "shadow": false,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "paddingLeft": 0,
 "transitionMode": "blending",
 "toolTipShadowHorizontalLength": 0,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "playbackBarBorderSize": 0,
 "toolTipFontFamily": "Arial",
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "borderSize": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "progressHeight": 10,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "top": "0%",
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "class": "ViewerArea",
 "borderRadius": 0,
 "paddingBottom": 0,
 "toolTipBorderRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadHeight": 15,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "transitionDuration": 500,
 "data": {
  "name": "Viewer photoalbum 1"
 }
},
{
 "cursor": "hand",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "left": 10,
 "width": "14.22%",
 "transparencyActive": false,
 "borderSize": 0,
 "minHeight": 50,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "bottom": "20%",
 "top": "20%",
 "mode": "push",
 "verticalAlign": "middle",
 "minWidth": 50,
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "paddingLeft": 0,
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "propagateClick": true,
 "data": {
  "name": "IconButton <"
 }
},
{
 "cursor": "hand",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "width": "14.22%",
 "transparencyActive": false,
 "right": 10,
 "borderSize": 0,
 "minHeight": 50,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "bottom": "20%",
 "top": "20%",
 "mode": "push",
 "verticalAlign": "middle",
 "minWidth": 50,
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "paddingLeft": 0,
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "propagateClick": true,
 "data": {
  "name": "IconButton >"
 }
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "width": "10%",
 "transparencyActive": false,
 "right": 20,
 "borderSize": 0,
 "minHeight": 50,
 "horizontalAlign": "right",
 "paddingRight": 0,
 "top": 20,
 "minWidth": 50,
 "mode": "push",
 "verticalAlign": "top",
 "height": "10%",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "paddingLeft": 0,
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "cursor": "hand",
 "propagateClick": true,
 "data": {
  "name": "IconButton X"
 }
},
{
 "maxHeight": 1000,
 "maxWidth": 2000,
 "id": "Image_1E19C23C_57F1_802D_41D1_9DC72DB5C1E1",
 "left": "0%",
 "width": "100%",
 "borderSize": 0,
 "url": "skin/Image_1E19C23C_57F1_802D_41D1_9DC72DB5C1E1.jpg",
 "minHeight": 1,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "top": "0%",
 "minWidth": 1,
 "verticalAlign": "bottom",
 "height": "100%",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Image",
 "borderRadius": 0,
 "paddingBottom": 0,
 "scaleMode": "fit_outside",
 "paddingLeft": 0,
 "propagateClick": false,
 "data": {
  "name": "Image40635"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container space"
 },
 "id": "Container_1E18223C_57F1_802D_41D5_C1ECF1EB519F",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "minHeight": 0,
 "horizontalAlign": "right",
 "borderSize": 0,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "contentOpaque": false,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "height": "5%",
 "shadow": false,
 "paddingTop": 20,
 "backgroundOpacity": 0.3,
 "class": "Container",
 "borderRadius": 0,
 "gap": 0,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container text"
 },
 "children": [
  "this.HTMLText_1E18123C_57F1_802D_41D2_B0CD0D6533F4",
  "this.Container_1E18623C_57F1_802D_41D5_C4D10C61A206"
 ],
 "id": "Container_1E18323C_57F1_802D_41AC_3EB4DE555BBC",
 "scrollBarOpacity": 0.79,
 "scrollBarColor": "#E73B2C",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "minHeight": 520,
 "horizontalAlign": "left",
 "borderSize": 0,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "minWidth": 100,
 "contentOpaque": false,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "height": "100%",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0.3,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 30,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container space"
 },
 "id": "Container_1E18523C_57F1_802D_41B1_88C86CD9A273",
 "width": 370,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "horizontalAlign": "left",
 "borderSize": 0,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "verticalAlign": "top",
 "minWidth": 1,
 "height": 40,
 "shadow": false,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "maxHeight": 1095,
 "maxWidth": 1095,
 "id": "Image_0435F73B_2D0F_4BF4_4181_65F86A8DAC19",
 "left": "0%",
 "width": "100%",
 "borderSize": 0,
 "url": "skin/Image_0435F73B_2D0F_4BF4_4181_65F86A8DAC19.png",
 "minHeight": 30,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "top": "0%",
 "minWidth": 40,
 "verticalAlign": "top",
 "height": "25%",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Image",
 "borderRadius": 0,
 "paddingBottom": 0,
 "scaleMode": "fit_inside",
 "paddingLeft": 0,
 "propagateClick": true,
 "data": {
  "name": "Image Company"
 }
},
{
 "data": {
  "name": "-Level 1"
 },
 "children": [
  "this.Container_208C289A_3033_51B4_41BC_C3F8D8B8F86D",
  "this.Button_0AEB5577_2D08_CE7B_41B6_192923248F4E",
  "this.Container_106C4A62_2D09_C594_41C0_0D00619DF541",
  "this.Button_0A054365_2D09_CB9F_4145_8C365B373D19",
  "this.Container_152401E8_2D0B_4694_41C5_9141C985F9C3",
  "this.Button_0B73474A_2D18_CB95_41B5_180037BA80BC",
  "this.Container_1BA343A6_2D0B_4A9D_41A8_3A02573B3B89",
  "this.Button_1D2C4FDF_2D7F_BAAB_4198_FBD1E9E469FF",
  "this.Container_15283BED_2D08_DA6F_41C5_5635F0C6DB03",
  "this.Button_0399826A_2D79_4594_41BA_934A50D0E6B4",
  "this.Container_146FF082_2D09_C695_41C4_13DE74CDAF5E",
  "this.Button_1D0C50DE_2D07_C6AD_41C1_CF4547A6CFAB",
  "this.Container_207ECEAD_3035_51EC_41A3_EE49910C654D"
 ],
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "id": "Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "width": "100%",
 "layout": "vertical",
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "bottom": "26%",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "middle",
 "top": "26%",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 0,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "data": {
  "name": "-Container footer"
 },
 "children": [
  "this.Container_193B8A52_2D1B_C5B5_41C3_F44FF520A3F0",
  "this.HTMLText_29DD1615_3597_79DF_41C4_7593739E5260",
  "this.Container_2B9EE463_3593_BA7B_4195_8E8F4568BB13",
  "this.Container_283049D5_35F3_AA5F_419D_20B6A59ABCA6"
 ],
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "id": "Container_19256A12_2D07_45B5_41AB_E9DE96B2DFF3",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "layout": "vertical",
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "bottom": "0%",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "bottom",
 "height": 130,
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "data": {
  "name": "-Level 2-1"
 },
 "children": [
  "this.Button_2A2DA53B_310E_001C_41C7_8885E712C50B",
  "this.Container_2A2DB53B_310E_001C_41BA_0206228E495C",
  "this.Container_1303E3BB_3106_001D_41C8_60D6F4D70B2F",
  "this.Button_2A2D853B_310E_001C_41C4_1C2E2BAFC35D",
  "this.Button_2A2DE53B_310E_001C_41BB_C7AB6950A4DD",
  "this.Button_2A2C253B_310E_001C_41B6_D3A7F4F68C3E",
  "this.Button_2A2C053B_310E_001C_41A2_583DE489828C",
  "this.Button_2A2C753B_310E_001C_41C4_B649CCC20E3D",
  "this.Button_2A2C553C_310E_0014_41C4_86393D0ADCC7",
  "this.Button_15EF2665_3106_0035_41AE_9BACA1A48D02",
  "this.Button_15F5A318_3106_001C_41C5_9AA2EF2184CF",
  "this.Button_1203FDB8_3106_001C_41B6_C9BE8EDD0DA9",
  "this.Button_13D4FC1E_310A_0017_41BA_DDA6D071C1BA"
 ],
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "id": "Container_2A2CB53C_310E_0014_41C3_AB834B10253B",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "layout": "vertical",
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "top": "25%",
 "bottom": "25%",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "middle",
 "creationPolicy": "inAdvance",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 0,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "data": {
  "name": "-Level 2-2"
 },
 "children": [
  "this.Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1",
  "this.Container_15A14DDC_31FA_0014_41BE_C93192DD207E",
  "this.Container_15A16DDC_31FA_0014_4199_0FBF7553300D",
  "this.Button_15A10DDC_31FA_0014_4185_021C898E177D",
  "this.Button_15A13DDC_31FA_0014_41C5_41AE80876834",
  "this.Button_15A12DDC_31FA_0014_416B_ED845741AE5F",
  "this.Button_159EDDDC_31FA_0014_419A_61C18E43FE01",
  "this.Button_159ECDDC_31FA_0014_41B9_2D5AB1021813",
  "this.Button_159EFDDC_31FA_0014_41C6_9CF7032F84E0",
  "this.Button_159EEDDC_31FA_0014_41B6_22A86B2D2FEB",
  "this.Button_159E9DDC_31FA_0015_41B6_CB1D433C7673",
  "this.Button_159E8DDD_31FA_0014_41C5_F18F441AF371",
  "this.Button_159EBDDD_31FA_0014_41C8_935504B30727"
 ],
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "id": "Container_159EADDD_31FA_0014_41C8_8A5203EC627B",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "layout": "vertical",
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "top": "25%",
 "bottom": "25%",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "middle",
 "creationPolicy": "inAdvance",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 0,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "data": {
  "name": "-Level 2-3"
 },
 "children": [
  "this.Button_1757CD7D_31FA_0015_4143_A9E37B16A50B",
  "this.Container_17579D7D_31FA_0015_41A1_D2B94269F28D",
  "this.Container_17578D7D_31FA_0015_41BE_353D3005648A",
  "this.Button_1757AD7D_31FA_0015_41C7_FB79F56FA149",
  "this.Button_17565D7D_31FA_0015_4193_78BBCB2DC70F",
  "this.Button_17564D7D_31FA_0015_41B8_A9191CD56C52",
  "this.Button_17567D7D_31FA_0015_41C2_1E0D0AF05C7A",
  "this.Button_17566D7D_31FA_0015_41AD_98D7C60C694F",
  "this.Button_17561D7D_31FA_0015_41B5_BD72FAC26B8B",
  "this.Button_17560D7D_31FA_0015_41C4_7F0EC7540CC2",
  "this.Button_17562D7D_31FA_0015_41A3_96B282B30DBA",
  "this.Button_1756DD7D_31FA_0015_41A5_988B67FCF8B7",
  "this.Button_1756FD7D_31FA_0015_41C7_DA2AAC2AAAEC"
 ],
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "id": "Container_17569D7D_31FA_0015_41C4_CBC688763A8D",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "layout": "vertical",
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "top": "25%",
 "bottom": "25%",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "middle",
 "creationPolicy": "inAdvance",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 0,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "data": {
  "name": "-Level 2-4"
 },
 "children": [
  "this.Button_175A5214_31FA_0014_4198_930DF49BADD9",
  "this.Container_175A4215_31FA_0014_41B2_5B8676CC3F2F",
  "this.Container_1759B215_31FA_0014_41C0_84C99CBD5517",
  "this.Button_1759A215_31FA_0014_41C7_F6B1044E5BB3",
  "this.Button_17598215_31FA_0014_41AC_1166AB319171",
  "this.Button_1759F215_31FA_0014_41BD_BBFA5FB0D882",
  "this.Button_1759D215_31FA_0014_41AD_B6C5744A0B97",
  "this.Button_17593215_31FA_0014_41C0_42BAFB0080F0",
  "this.Button_17592215_31FA_0014_41B2_AA3B5CC318B8",
  "this.Button_17590215_31FA_0014_41C1_2B2D012DCC76",
  "this.Button_17597215_31FA_0014_41C0_9BEE1DE4D7F6",
  "this.Button_17596215_31FA_0014_41C6_A42670770708",
  "this.Button_1758B215_31FA_0014_41BC_C4EAC2A9544B"
 ],
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "id": "Container_1758A215_31FA_0014_41B6_9A4A5384548B",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "layout": "vertical",
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "top": "25%",
 "bottom": "25%",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "middle",
 "creationPolicy": "inAdvance",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 0,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "data": {
  "name": "-Level 2-5"
 },
 "children": [
  "this.Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C",
  "this.Container_17EA92B7_3106_0014_41A6_2B88DF32BBA7",
  "this.Container_17EAA2B7_3106_0014_41B0_ACBB1485A79E",
  "this.Button_17EAB2B7_3106_0014_41A7_209417AD3E9A",
  "this.Button_17EAD2B7_3106_0014_41C0_0B5453B4841D",
  "this.Button_17EAE2B7_3106_0014_41C7_DB7FC43AAEE0",
  "this.Button_17EB02B7_3106_0014_41AF_05D9AC36B189",
  "this.Button_17EB32B7_3106_0014_41C8_467BF6AECBE8",
  "this.Button_17EB42B7_3106_0014_41B0_CE70CBDDF438",
  "this.Button_17EB52B7_3106_0014_419C_439E593AEC43",
  "this.Button_17EB62B7_3106_0014_41C5_43B38271B353",
  "this.Button_17EB72B7_3106_0014_41B9_61857077BF4A",
  "this.Button_17EB92B7_3106_0014_41B2_34A3E3F63779"
 ],
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "id": "Container_17EBA2B7_3106_0014_41A9_D6C96D0633AE",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "layout": "vertical",
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "top": "25%",
 "bottom": "25%",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "middle",
 "creationPolicy": "inAdvance",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 0,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "data": {
  "name": "-Level 2-6"
 },
 "children": [
  "this.Button_168CA310_3106_01EC_41C7_72CE0522951A",
  "this.Container_168C8310_3106_01EC_4187_B16F315A4A23",
  "this.Container_168D7310_3106_01EC_41BE_5FCBD9E27BE4",
  "this.Button_168D6310_3106_01EC_41B8_A0B6BE627547",
  "this.Button_168D5310_3106_01EC_41B5_96D9387401B8",
  "this.Button_168D3310_3106_01EC_41AC_5D524E4677A5",
  "this.Button_168D2310_3106_01EC_41B8_9D7D1B2B55FA",
  "this.Button_168D0310_3106_01EC_41A1_FA8FC42E6FF3",
  "this.Button_168DE310_3106_01EC_4192_6A9F468A0ADE",
  "this.Button_168DD310_3106_01EC_4190_7815FA70349E",
  "this.Button_168DB310_3106_01EC_41B2_3511AA5E40E1",
  "this.Button_168DA310_3106_01EC_41BE_DF88732C2A28",
  "this.Button_168D9311_3106_01EC_41A8_3BD8769525D6"
 ],
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "id": "Container_168D8311_3106_01EC_41B0_F2D40886AB88",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "layout": "vertical",
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "top": "25%",
 "bottom": "25%",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "middle",
 "creationPolicy": "inAdvance",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 0,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#04A3E1",
 "id": "HTMLText_062AD830_1140_E215_41B0_321699661E7F",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 10,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "height": "100%",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.38vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.82vh;font-family:'Oswald';\"><B><I>LOREM IPSUM</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.82vh;font-family:'Oswald';\"><B><I>DOLOR SIT AMET</I></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.05vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.41vh;font-family:'Oswald';\"><B>CONSECTETUR ADIPISCING ELIT. MORBI BIBENDUM PHARETRA LOREM, ACCUMSAN SAN NULLA.</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.05vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.05vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.05vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV><p STYLE=\"margin:0; line-height:1.05vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.05vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.05vh;font-family:Arial, Helvetica, sans-serif;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.05vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.41vh;font-family:'Oswald';\"><B><I>DONEC FEUGIAT:</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.05vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.68vh;\"> </SPAN>\u2022 Nisl nec mi sollicitudin facilisis </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.05vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Nam sed faucibus est.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.05vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Ut eget lorem sed leo.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.05vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.05vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.05vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.41vh;font-family:'Oswald';\"><B><I>LOREM IPSUM:</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.83vh;font-family:'Oswald';\"><B>$150,000</B></SPAN></SPAN></DIV></div>",
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingBottom": 20,
 "paddingLeft": 10,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "HTMLText"
 }
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "Button"
 },
 "id": "Button_062AF830_1140_E215_418D_D2FC11B12C47",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "width": 180,
 "fontSize": "2.39vh",
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "horizontalAlign": "center",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "borderColor": "#000000",
 "paddingRight": 0,
 "backgroundColor": [
  "#04A3E1"
 ],
 "layout": "horizontal",
 "mode": "push",
 "verticalAlign": "middle",
 "minWidth": 1,
 "label": "LOREM IPSUM",
 "height": 50,
 "shadow": false,
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0.7,
 "paddingTop": 0,
 "rollOverBackgroundOpacity": 1,
 "class": "Button",
 "borderRadius": 50,
 "gap": 5,
 "paddingBottom": 0,
 "textDecoration": "none",
 "paddingLeft": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": false,
 "fontWeight": "bold",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "scrollBarOpacity": 0,
 "scrollBarColor": "#04A3E1",
 "id": "HTMLText_1E18123C_57F1_802D_41D2_B0CD0D6533F4",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "height": "46%",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.38vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.82vh;font-family:'Oswald';\"><B><I>LOREM IPSUM</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.82vh;font-family:'Oswald';\"><B><I>DOLOR SIT AMET</I></B></SPAN></SPAN></DIV></div>",
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "HTMLText18899"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "- content"
 },
 "children": [
  "this.Image_1E18723C_57F1_802D_41C5_8325536874A5",
  "this.HTMLText_1E18423C_57F1_802D_41C4_458DB7F892AC"
 ],
 "id": "Container_1E18623C_57F1_802D_41D5_C4D10C61A206",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "horizontalAlign": "left",
 "borderSize": 0,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "contentOpaque": false,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "height": "75%",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0.3,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_208C289A_3033_51B4_41BC_C3F8D8B8F86D",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "horizontalAlign": "left",
 "borderSize": 0,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "verticalAlign": "top",
 "minWidth": 1,
 "height": 1,
 "shadow": false,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button Tour Info"
 },
 "id": "Button_0AEB5577_2D08_CE7B_41B6_192923248F4E",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "paddingRight": 0,
 "minWidth": 1,
 "layout": "horizontal",
 "mode": "push",
 "verticalAlign": "middle",
 "height": 50,
 "label": "RECEPTION >",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, false, 0, null, null, false); this.setComponentVisibility(this.Container_2A2CB53C_310E_0014_41C3_AB834B10253B, true, 0, null, null, false)",
 "shadow": false,
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "class": "Button",
 "textDecoration": "none",
 "paddingLeft": 10,
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_106C4A62_2D09_C594_41C0_0D00619DF541",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "horizontalAlign": "left",
 "borderSize": 0,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "verticalAlign": "top",
 "minWidth": 1,
 "height": 1,
 "shadow": false,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button Panorama List"
 },
 "id": "Button_0A054365_2D09_CB9F_4145_8C365B373D19",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "paddingRight": 0,
 "minWidth": 1,
 "layout": "horizontal",
 "mode": "push",
 "verticalAlign": "middle",
 "height": 50,
 "label": "ROOMS >",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, false, 0, null, null, false); this.setComponentVisibility(this.Container_159EADDD_31FA_0014_41C8_8A5203EC627B, true, 0, null, null, false)",
 "shadow": false,
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 23,
 "paddingBottom": 0,
 "class": "Button",
 "textDecoration": "none",
 "paddingLeft": 10,
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_152401E8_2D0B_4694_41C5_9141C985F9C3",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "horizontalAlign": "left",
 "borderSize": 0,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "verticalAlign": "top",
 "minWidth": 1,
 "height": 1,
 "shadow": false,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button Location"
 },
 "id": "Button_0B73474A_2D18_CB95_41B5_180037BA80BC",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "paddingRight": 0,
 "pressedLabel": "Inserdt Text",
 "minWidth": 1,
 "layout": "horizontal",
 "mode": "push",
 "verticalAlign": "middle",
 "height": 50,
 "label": "AMENITIES >",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, false, 0, null, null, false); this.setComponentVisibility(this.Container_17569D7D_31FA_0015_41C4_CBC688763A8D, true, 0, null, null, false)",
 "shadow": false,
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "class": "Button",
 "textDecoration": "none",
 "paddingLeft": 10,
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_1BA343A6_2D0B_4A9D_41A8_3A02573B3B89",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "horizontalAlign": "left",
 "borderSize": 0,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "verticalAlign": "top",
 "minWidth": 1,
 "height": 1,
 "shadow": false,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button Floorplan"
 },
 "id": "Button_1D2C4FDF_2D7F_BAAB_4198_FBD1E9E469FF",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "paddingRight": 0,
 "minWidth": 1,
 "layout": "horizontal",
 "mode": "push",
 "verticalAlign": "middle",
 "height": 50,
 "label": "SPORTS AREA >",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, false, 0, null, null, false); this.setComponentVisibility(this.Container_1758A215_31FA_0014_41B6_9A4A5384548B, true, 0, null, null, false)",
 "shadow": false,
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "class": "Button",
 "textDecoration": "none",
 "paddingLeft": 10,
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_15283BED_2D08_DA6F_41C5_5635F0C6DB03",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "horizontalAlign": "left",
 "borderSize": 0,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "verticalAlign": "top",
 "minWidth": 1,
 "height": 1,
 "shadow": false,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button Photoalbum"
 },
 "id": "Button_0399826A_2D79_4594_41BA_934A50D0E6B4",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "paddingRight": 0,
 "minWidth": 1,
 "layout": "horizontal",
 "mode": "push",
 "verticalAlign": "middle",
 "height": 50,
 "label": "SWIMMING POOL >",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, false, 0, null, null, false); this.setComponentVisibility(this.Container_17EBA2B7_3106_0014_41A9_D6C96D0633AE, true, 0, null, null, false)",
 "shadow": false,
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "class": "Button",
 "textDecoration": "none",
 "paddingLeft": 10,
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_146FF082_2D09_C695_41C4_13DE74CDAF5E",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "horizontalAlign": "left",
 "borderSize": 0,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "verticalAlign": "top",
 "minWidth": 1,
 "height": 1,
 "shadow": false,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button Contact"
 },
 "id": "Button_1D0C50DE_2D07_C6AD_41C1_CF4547A6CFAB",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "paddingRight": 0,
 "minWidth": 1,
 "layout": "horizontal",
 "mode": "push",
 "verticalAlign": "middle",
 "height": 50,
 "label": "RESTAURANTS >",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, false, 0, null, null, false); this.setComponentVisibility(this.Container_168D8311_3106_01EC_41B0_F2D40886AB88, true, 0, null, null, false)",
 "shadow": false,
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "class": "Button",
 "textDecoration": "none",
 "paddingLeft": 10,
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_207ECEAD_3035_51EC_41A3_EE49910C654D",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "horizontalAlign": "left",
 "borderSize": 0,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "verticalAlign": "top",
 "minWidth": 1,
 "height": 1,
 "shadow": false,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "blue line"
 },
 "id": "Container_193B8A52_2D1B_C5B5_41C3_F44FF520A3F0",
 "width": 40,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "horizontalAlign": "left",
 "borderSize": 0,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#5CA1DE"
 ],
 "contentOpaque": false,
 "verticalAlign": "top",
 "minWidth": 1,
 "height": 2,
 "shadow": false,
 "backgroundOpacity": 1,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "visible"
},
{
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "id": "HTMLText_29DD1615_3597_79DF_41C4_7593739E5260",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "height": 78,
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Company Name</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>info@loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV></div>",
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "data": {
  "name": "HTMLText47602"
 }
},
{
 "data": {
  "name": "-Container Icons 1"
 },
 "children": [
  "this.IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83",
  "this.IconButton_2B917411_3593_B9D7_41C6_8D1102463EC5"
 ],
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "id": "Container_2B9EE463_3593_BA7B_4195_8E8F4568BB13",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "layout": "horizontal",
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "contentOpaque": false,
 "verticalAlign": "bottom",
 "height": 56,
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 7,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "data": {
  "name": "-Container Icons 2"
 },
 "children": [
  "this.IconButton_2BBEA1DF_35B3_BA4B_41B8_DE69AA453A15",
  "this.IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7",
  "this.IconButton_2A159B11_35B0_EFD6_41C9_DF408F8120FF",
  "this.IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F"
 ],
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "id": "Container_283049D5_35F3_AA5F_419D_20B6A59ABCA6",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "layout": "horizontal",
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "contentOpaque": false,
 "verticalAlign": "top",
 "height": 44,
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 7,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button <BACK"
 },
 "id": "Button_2A2DA53B_310E_001C_41C7_8885E712C50B",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "paddingRight": 0,
 "minWidth": 1,
 "layout": "horizontal",
 "mode": "push",
 "verticalAlign": "middle",
 "height": 50,
 "label": "BACK",
 "rollOverFontSize": 18,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_2A2CB53C_310E_0014_41C3_AB834B10253B, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "shadow": false,
 "iconHeight": 30,
 "iconURL": "skin/Button_2A2DA53B_310E_001C_41C7_8885E712C50B.png",
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "rollOverFontFamily": "Oswald",
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/Button_2A2DA53B_310E_001C_41C7_8885E712C50B_rollover.png",
 "class": "Button",
 "textDecoration": "none",
 "paddingLeft": 5,
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 30,
 "rollOverBackgroundOpacity": 0.8
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_2A2DB53B_310E_001C_41BA_0206228E495C",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "horizontalAlign": "left",
 "borderSize": 0,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "verticalAlign": "top",
 "minWidth": 1,
 "height": 1,
 "shadow": false,
 "backgroundOpacity": 0.5,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "data": {
  "name": "line separator"
 },
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "id": "Container_1303E3BB_3106_001D_41C8_60D6F4D70B2F",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "layout": "absolute",
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "contentOpaque": false,
 "verticalAlign": "top",
 "height": 8,
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 1"
 },
 "id": "Button_2A2D853B_310E_001C_41C4_1C2E2BAFC35D",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "paddingRight": 0,
 "minWidth": 1,
 "layout": "horizontal",
 "mode": "push",
 "verticalAlign": "middle",
 "height": 36,
 "label": "Main Entrance",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "shadow": false,
 "iconHeight": 32,
 "shadowBlurRadius": 15,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 5,
 "rollOverShadow": false,
 "paddingBottom": 0,
 "class": "Button",
 "textDecoration": "none",
 "paddingLeft": 10,
 "fontStyle": "italic",
 "rollOverShadowBlurRadius": 18,
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 2"
 },
 "id": "Button_2A2DE53B_310E_001C_41BB_C7AB6950A4DD",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "paddingRight": 0,
 "minWidth": 1,
 "layout": "horizontal",
 "mode": "push",
 "verticalAlign": "middle",
 "height": 36,
 "label": "Lobby",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "shadow": false,
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 23,
 "paddingBottom": 0,
 "class": "Button",
 "textDecoration": "none",
 "paddingLeft": 10,
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 3"
 },
 "id": "Button_2A2C253B_310E_001C_41B6_D3A7F4F68C3E",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "paddingRight": 0,
 "pressedLabel": "Reception",
 "minWidth": 1,
 "layout": "horizontal",
 "mode": "push",
 "verticalAlign": "middle",
 "height": 36,
 "label": "Reception",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "shadow": false,
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "class": "Button",
 "textDecoration": "none",
 "paddingLeft": 10,
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 4"
 },
 "id": "Button_2A2C053B_310E_001C_41A2_583DE489828C",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "paddingRight": 0,
 "minWidth": 1,
 "layout": "horizontal",
 "mode": "push",
 "verticalAlign": "middle",
 "height": 36,
 "label": "Meeting Area 1",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "shadow": false,
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "class": "Button",
 "textDecoration": "none",
 "paddingLeft": 10,
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 5"
 },
 "id": "Button_2A2C753B_310E_001C_41C4_B649CCC20E3D",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "paddingRight": 0,
 "minWidth": 1,
 "layout": "horizontal",
 "mode": "push",
 "verticalAlign": "middle",
 "height": 36,
 "label": "Meeting Area 2",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "shadow": false,
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "class": "Button",
 "textDecoration": "none",
 "paddingLeft": 10,
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 6"
 },
 "id": "Button_2A2C553C_310E_0014_41C4_86393D0ADCC7",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "paddingRight": 0,
 "minWidth": 1,
 "layout": "horizontal",
 "mode": "push",
 "verticalAlign": "middle",
 "height": 36,
 "label": "Bar",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "shadow": false,
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "class": "Button",
 "textDecoration": "none",
 "paddingLeft": 10,
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 7"
 },
 "id": "Button_15EF2665_3106_0035_41AE_9BACA1A48D02",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "paddingRight": 0,
 "minWidth": 1,
 "layout": "horizontal",
 "mode": "push",
 "verticalAlign": "middle",
 "height": 36,
 "label": "Chill Out",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "shadow": false,
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "class": "Button",
 "textDecoration": "none",
 "paddingLeft": 10,
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 8"
 },
 "id": "Button_15F5A318_3106_001C_41C5_9AA2EF2184CF",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "paddingRight": 0,
 "minWidth": 1,
 "layout": "horizontal",
 "mode": "push",
 "verticalAlign": "middle",
 "height": 36,
 "label": "Terrace",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "shadow": false,
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "class": "Button",
 "textDecoration": "none",
 "paddingLeft": 10,
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 9"
 },
 "id": "Button_1203FDB8_3106_001C_41B6_C9BE8EDD0DA9",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "paddingRight": 0,
 "minWidth": 1,
 "layout": "horizontal",
 "mode": "push",
 "verticalAlign": "middle",
 "height": 36,
 "label": "Garden",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "shadow": false,
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "class": "Button",
 "textDecoration": "none",
 "paddingLeft": 0,
 "visible": false,
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 10"
 },
 "id": "Button_13D4FC1E_310A_0017_41BA_DDA6D071C1BA",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "paddingRight": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "minWidth": 1,
 "layout": "horizontal",
 "mode": "push",
 "verticalAlign": "middle",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "shadow": false,
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "class": "Button",
 "textDecoration": "none",
 "paddingLeft": 0,
 "visible": false,
 "pressedBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button <BACK"
 },
 "id": "Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "paddingRight": 0,
 "minWidth": 1,
 "layout": "horizontal",
 "mode": "push",
 "verticalAlign": "middle",
 "height": 50,
 "label": "BACK",
 "rollOverFontSize": 18,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_159EADDD_31FA_0014_41C8_8A5203EC627B, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "shadow": false,
 "iconHeight": 30,
 "iconURL": "skin/Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1.png",
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "rollOverFontFamily": "Oswald",
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1_rollover.png",
 "class": "Button",
 "textDecoration": "none",
 "paddingLeft": 5,
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 30,
 "rollOverBackgroundOpacity": 0.8
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_15A14DDC_31FA_0014_41BE_C93192DD207E",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "horizontalAlign": "left",
 "borderSize": 0,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "verticalAlign": "top",
 "minWidth": 1,
 "height": 1,
 "shadow": false,
 "backgroundOpacity": 0.5,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "data": {
  "name": "line separator"
 },
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "id": "Container_15A16DDC_31FA_0014_4199_0FBF7553300D",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "layout": "absolute",
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "contentOpaque": false,
 "verticalAlign": "top",
 "height": 8,
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 1"
 },
 "id": "Button_15A10DDC_31FA_0014_4185_021C898E177D",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "paddingRight": 0,
 "minWidth": 1,
 "layout": "horizontal",
 "mode": "push",
 "verticalAlign": "middle",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "shadow": false,
 "iconHeight": 32,
 "shadowBlurRadius": 15,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 5,
 "rollOverShadow": false,
 "paddingBottom": 0,
 "class": "Button",
 "textDecoration": "none",
 "paddingLeft": 10,
 "fontStyle": "italic",
 "rollOverShadowBlurRadius": 18,
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 2"
 },
 "id": "Button_15A13DDC_31FA_0014_41C5_41AE80876834",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "paddingRight": 0,
 "minWidth": 1,
 "layout": "horizontal",
 "mode": "push",
 "verticalAlign": "middle",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "shadow": false,
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 23,
 "paddingBottom": 0,
 "class": "Button",
 "textDecoration": "none",
 "paddingLeft": 10,
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 3"
 },
 "id": "Button_15A12DDC_31FA_0014_416B_ED845741AE5F",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "paddingRight": 0,
 "pressedLabel": "Lorem Ipsum",
 "minWidth": 1,
 "layout": "horizontal",
 "mode": "push",
 "verticalAlign": "middle",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "shadow": false,
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "class": "Button",
 "textDecoration": "none",
 "paddingLeft": 10,
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 4"
 },
 "id": "Button_159EDDDC_31FA_0014_419A_61C18E43FE01",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "paddingRight": 0,
 "minWidth": 1,
 "layout": "horizontal",
 "mode": "push",
 "verticalAlign": "middle",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "shadow": false,
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "class": "Button",
 "textDecoration": "none",
 "paddingLeft": 10,
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 5"
 },
 "id": "Button_159ECDDC_31FA_0014_41B9_2D5AB1021813",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "paddingRight": 0,
 "minWidth": 1,
 "layout": "horizontal",
 "mode": "push",
 "verticalAlign": "middle",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "shadow": false,
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "class": "Button",
 "textDecoration": "none",
 "paddingLeft": 10,
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 6"
 },
 "id": "Button_159EFDDC_31FA_0014_41C6_9CF7032F84E0",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "paddingRight": 0,
 "minWidth": 1,
 "layout": "horizontal",
 "mode": "push",
 "verticalAlign": "middle",
 "height": 36,
 "label": "Lorem ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "shadow": false,
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "class": "Button",
 "textDecoration": "none",
 "paddingLeft": 10,
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 7"
 },
 "id": "Button_159EEDDC_31FA_0014_41B6_22A86B2D2FEB",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "paddingRight": 0,
 "minWidth": 1,
 "layout": "horizontal",
 "mode": "push",
 "verticalAlign": "middle",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "shadow": false,
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "class": "Button",
 "textDecoration": "none",
 "paddingLeft": 10,
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 8"
 },
 "id": "Button_159E9DDC_31FA_0015_41B6_CB1D433C7673",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "paddingRight": 0,
 "minWidth": 1,
 "layout": "horizontal",
 "mode": "push",
 "verticalAlign": "middle",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "shadow": false,
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "class": "Button",
 "textDecoration": "none",
 "paddingLeft": 10,
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 9"
 },
 "id": "Button_159E8DDD_31FA_0014_41C5_F18F441AF371",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "paddingRight": 0,
 "minWidth": 1,
 "layout": "horizontal",
 "mode": "push",
 "verticalAlign": "middle",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "shadow": false,
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "class": "Button",
 "textDecoration": "none",
 "paddingLeft": 10,
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 10"
 },
 "id": "Button_159EBDDD_31FA_0014_41C8_935504B30727",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "paddingRight": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "minWidth": 1,
 "layout": "horizontal",
 "mode": "push",
 "verticalAlign": "middle",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "shadow": false,
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "class": "Button",
 "textDecoration": "none",
 "paddingLeft": 10,
 "pressedBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button <BACK"
 },
 "id": "Button_1757CD7D_31FA_0015_4143_A9E37B16A50B",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "paddingRight": 0,
 "minWidth": 1,
 "layout": "horizontal",
 "mode": "push",
 "verticalAlign": "middle",
 "height": 50,
 "label": "BACK",
 "rollOverFontSize": 18,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_17569D7D_31FA_0015_41C4_CBC688763A8D, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "shadow": false,
 "iconHeight": 30,
 "iconURL": "skin/Button_1757CD7D_31FA_0015_4143_A9E37B16A50B.png",
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "rollOverFontFamily": "Oswald",
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/Button_1757CD7D_31FA_0015_4143_A9E37B16A50B_rollover.png",
 "class": "Button",
 "textDecoration": "none",
 "paddingLeft": 5,
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 30,
 "rollOverBackgroundOpacity": 0.8
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_17579D7D_31FA_0015_41A1_D2B94269F28D",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "horizontalAlign": "left",
 "borderSize": 0,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "verticalAlign": "top",
 "minWidth": 1,
 "height": 1,
 "shadow": false,
 "backgroundOpacity": 0.5,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "data": {
  "name": "line separator"
 },
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "id": "Container_17578D7D_31FA_0015_41BE_353D3005648A",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "layout": "absolute",
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "contentOpaque": false,
 "verticalAlign": "top",
 "height": 8,
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 1"
 },
 "id": "Button_1757AD7D_31FA_0015_41C7_FB79F56FA149",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "paddingRight": 0,
 "minWidth": 1,
 "layout": "horizontal",
 "mode": "push",
 "verticalAlign": "middle",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "shadow": false,
 "iconHeight": 32,
 "shadowBlurRadius": 15,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 5,
 "rollOverShadow": false,
 "paddingBottom": 0,
 "class": "Button",
 "textDecoration": "none",
 "paddingLeft": 10,
 "fontStyle": "italic",
 "rollOverShadowBlurRadius": 18,
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 2"
 },
 "id": "Button_17565D7D_31FA_0015_4193_78BBCB2DC70F",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "paddingRight": 0,
 "minWidth": 1,
 "layout": "horizontal",
 "mode": "push",
 "verticalAlign": "middle",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "shadow": false,
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 23,
 "paddingBottom": 0,
 "class": "Button",
 "textDecoration": "none",
 "paddingLeft": 10,
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 3"
 },
 "id": "Button_17564D7D_31FA_0015_41B8_A9191CD56C52",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "paddingRight": 0,
 "pressedLabel": "Lorem Ipsum",
 "minWidth": 1,
 "layout": "horizontal",
 "mode": "push",
 "verticalAlign": "middle",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "shadow": false,
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "class": "Button",
 "textDecoration": "none",
 "paddingLeft": 10,
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 4"
 },
 "id": "Button_17567D7D_31FA_0015_41C2_1E0D0AF05C7A",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "paddingRight": 0,
 "minWidth": 1,
 "layout": "horizontal",
 "mode": "push",
 "verticalAlign": "middle",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "shadow": false,
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "class": "Button",
 "textDecoration": "none",
 "paddingLeft": 10,
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 5"
 },
 "id": "Button_17566D7D_31FA_0015_41AD_98D7C60C694F",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "paddingRight": 0,
 "minWidth": 1,
 "layout": "horizontal",
 "mode": "push",
 "verticalAlign": "middle",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "shadow": false,
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "class": "Button",
 "textDecoration": "none",
 "paddingLeft": 10,
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 6"
 },
 "id": "Button_17561D7D_31FA_0015_41B5_BD72FAC26B8B",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "paddingRight": 0,
 "minWidth": 1,
 "layout": "horizontal",
 "mode": "push",
 "verticalAlign": "middle",
 "height": 36,
 "label": "Lorem ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "shadow": false,
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "class": "Button",
 "textDecoration": "none",
 "paddingLeft": 10,
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 7"
 },
 "id": "Button_17560D7D_31FA_0015_41C4_7F0EC7540CC2",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "paddingRight": 0,
 "minWidth": 1,
 "layout": "horizontal",
 "mode": "push",
 "verticalAlign": "middle",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "shadow": false,
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "class": "Button",
 "textDecoration": "none",
 "paddingLeft": 10,
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 8"
 },
 "id": "Button_17562D7D_31FA_0015_41A3_96B282B30DBA",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "paddingRight": 0,
 "minWidth": 1,
 "layout": "horizontal",
 "mode": "push",
 "verticalAlign": "middle",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "shadow": false,
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "class": "Button",
 "textDecoration": "none",
 "paddingLeft": 10,
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 9"
 },
 "id": "Button_1756DD7D_31FA_0015_41A5_988B67FCF8B7",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "paddingRight": 0,
 "minWidth": 1,
 "layout": "horizontal",
 "mode": "push",
 "verticalAlign": "middle",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "shadow": false,
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "class": "Button",
 "textDecoration": "none",
 "paddingLeft": 10,
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 10"
 },
 "id": "Button_1756FD7D_31FA_0015_41C7_DA2AAC2AAAEC",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "paddingRight": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "minWidth": 1,
 "layout": "horizontal",
 "mode": "push",
 "verticalAlign": "middle",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "shadow": false,
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "class": "Button",
 "textDecoration": "none",
 "paddingLeft": 10,
 "pressedBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button <BACK"
 },
 "id": "Button_175A5214_31FA_0014_4198_930DF49BADD9",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "paddingRight": 0,
 "minWidth": 1,
 "layout": "horizontal",
 "mode": "push",
 "verticalAlign": "middle",
 "height": 50,
 "label": "BACK",
 "rollOverFontSize": 18,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_1758A215_31FA_0014_41B6_9A4A5384548B, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "shadow": false,
 "iconHeight": 30,
 "iconURL": "skin/Button_175A5214_31FA_0014_4198_930DF49BADD9.png",
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "rollOverFontFamily": "Oswald",
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/Button_175A5214_31FA_0014_4198_930DF49BADD9_rollover.png",
 "class": "Button",
 "textDecoration": "none",
 "paddingLeft": 5,
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 30,
 "rollOverBackgroundOpacity": 0.8
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_175A4215_31FA_0014_41B2_5B8676CC3F2F",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "horizontalAlign": "left",
 "borderSize": 0,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "verticalAlign": "top",
 "minWidth": 1,
 "height": 1,
 "shadow": false,
 "backgroundOpacity": 0.5,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "data": {
  "name": "line separator"
 },
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "id": "Container_1759B215_31FA_0014_41C0_84C99CBD5517",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "layout": "absolute",
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "contentOpaque": false,
 "verticalAlign": "top",
 "height": 8,
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 1"
 },
 "id": "Button_1759A215_31FA_0014_41C7_F6B1044E5BB3",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "paddingRight": 0,
 "minWidth": 1,
 "layout": "horizontal",
 "mode": "push",
 "verticalAlign": "middle",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "shadow": false,
 "iconHeight": 32,
 "shadowBlurRadius": 15,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 5,
 "rollOverShadow": false,
 "paddingBottom": 0,
 "class": "Button",
 "textDecoration": "none",
 "paddingLeft": 10,
 "fontStyle": "italic",
 "rollOverShadowBlurRadius": 18,
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 2"
 },
 "id": "Button_17598215_31FA_0014_41AC_1166AB319171",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "paddingRight": 0,
 "minWidth": 1,
 "layout": "horizontal",
 "mode": "push",
 "verticalAlign": "middle",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "shadow": false,
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 23,
 "paddingBottom": 0,
 "class": "Button",
 "textDecoration": "none",
 "paddingLeft": 10,
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 3"
 },
 "id": "Button_1759F215_31FA_0014_41BD_BBFA5FB0D882",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "paddingRight": 0,
 "pressedLabel": "Lorem Ipsum",
 "minWidth": 1,
 "layout": "horizontal",
 "mode": "push",
 "verticalAlign": "middle",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "shadow": false,
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "class": "Button",
 "textDecoration": "none",
 "paddingLeft": 10,
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 4"
 },
 "id": "Button_1759D215_31FA_0014_41AD_B6C5744A0B97",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "paddingRight": 0,
 "minWidth": 1,
 "layout": "horizontal",
 "mode": "push",
 "verticalAlign": "middle",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "shadow": false,
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "class": "Button",
 "textDecoration": "none",
 "paddingLeft": 10,
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 5"
 },
 "id": "Button_17593215_31FA_0014_41C0_42BAFB0080F0",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "paddingRight": 0,
 "minWidth": 1,
 "layout": "horizontal",
 "mode": "push",
 "verticalAlign": "middle",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "shadow": false,
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "class": "Button",
 "textDecoration": "none",
 "paddingLeft": 10,
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 6"
 },
 "id": "Button_17592215_31FA_0014_41B2_AA3B5CC318B8",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "paddingRight": 0,
 "minWidth": 1,
 "layout": "horizontal",
 "mode": "push",
 "verticalAlign": "middle",
 "height": 36,
 "label": "Lorem ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "shadow": false,
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "class": "Button",
 "textDecoration": "none",
 "paddingLeft": 10,
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 7"
 },
 "id": "Button_17590215_31FA_0014_41C1_2B2D012DCC76",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "paddingRight": 0,
 "minWidth": 1,
 "layout": "horizontal",
 "mode": "push",
 "verticalAlign": "middle",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "shadow": false,
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "class": "Button",
 "textDecoration": "none",
 "paddingLeft": 10,
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 8"
 },
 "id": "Button_17597215_31FA_0014_41C0_9BEE1DE4D7F6",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "paddingRight": 0,
 "minWidth": 1,
 "layout": "horizontal",
 "mode": "push",
 "verticalAlign": "middle",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "shadow": false,
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "class": "Button",
 "textDecoration": "none",
 "paddingLeft": 10,
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 9"
 },
 "id": "Button_17596215_31FA_0014_41C6_A42670770708",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "paddingRight": 0,
 "minWidth": 1,
 "layout": "horizontal",
 "mode": "push",
 "verticalAlign": "middle",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "shadow": false,
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "class": "Button",
 "textDecoration": "none",
 "paddingLeft": 10,
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 10"
 },
 "id": "Button_1758B215_31FA_0014_41BC_C4EAC2A9544B",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "paddingRight": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "minWidth": 1,
 "layout": "horizontal",
 "mode": "push",
 "verticalAlign": "middle",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "shadow": false,
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "class": "Button",
 "textDecoration": "none",
 "paddingLeft": 10,
 "pressedBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button <BACK"
 },
 "id": "Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "paddingRight": 0,
 "minWidth": 1,
 "layout": "horizontal",
 "mode": "push",
 "verticalAlign": "middle",
 "height": 50,
 "label": "BACK",
 "rollOverFontSize": 18,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_17EBA2B7_3106_0014_41A9_D6C96D0633AE, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "shadow": false,
 "iconHeight": 30,
 "iconURL": "skin/Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C.png",
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "rollOverFontFamily": "Oswald",
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C_rollover.png",
 "class": "Button",
 "textDecoration": "none",
 "paddingLeft": 5,
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 30,
 "rollOverBackgroundOpacity": 0.8
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_17EA92B7_3106_0014_41A6_2B88DF32BBA7",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "horizontalAlign": "left",
 "borderSize": 0,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "verticalAlign": "top",
 "minWidth": 1,
 "height": 1,
 "shadow": false,
 "backgroundOpacity": 0.5,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "data": {
  "name": "line separator"
 },
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "id": "Container_17EAA2B7_3106_0014_41B0_ACBB1485A79E",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "layout": "absolute",
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "contentOpaque": false,
 "verticalAlign": "top",
 "height": 8,
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 1"
 },
 "id": "Button_17EAB2B7_3106_0014_41A7_209417AD3E9A",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "paddingRight": 0,
 "minWidth": 1,
 "layout": "horizontal",
 "mode": "push",
 "verticalAlign": "middle",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "shadow": false,
 "iconHeight": 32,
 "shadowBlurRadius": 15,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 5,
 "rollOverShadow": false,
 "paddingBottom": 0,
 "class": "Button",
 "textDecoration": "none",
 "paddingLeft": 10,
 "fontStyle": "italic",
 "rollOverShadowBlurRadius": 18,
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 2"
 },
 "id": "Button_17EAD2B7_3106_0014_41C0_0B5453B4841D",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "paddingRight": 0,
 "minWidth": 1,
 "layout": "horizontal",
 "mode": "push",
 "verticalAlign": "middle",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "shadow": false,
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 23,
 "paddingBottom": 0,
 "class": "Button",
 "textDecoration": "none",
 "paddingLeft": 10,
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 3"
 },
 "id": "Button_17EAE2B7_3106_0014_41C7_DB7FC43AAEE0",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "paddingRight": 0,
 "pressedLabel": "Lorem Ipsum",
 "minWidth": 1,
 "layout": "horizontal",
 "mode": "push",
 "verticalAlign": "middle",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "shadow": false,
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "class": "Button",
 "textDecoration": "none",
 "paddingLeft": 10,
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 4"
 },
 "id": "Button_17EB02B7_3106_0014_41AF_05D9AC36B189",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "paddingRight": 0,
 "minWidth": 1,
 "layout": "horizontal",
 "mode": "push",
 "verticalAlign": "middle",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "shadow": false,
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "class": "Button",
 "textDecoration": "none",
 "paddingLeft": 10,
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 5"
 },
 "id": "Button_17EB32B7_3106_0014_41C8_467BF6AECBE8",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "paddingRight": 0,
 "minWidth": 1,
 "layout": "horizontal",
 "mode": "push",
 "verticalAlign": "middle",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "shadow": false,
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "class": "Button",
 "textDecoration": "none",
 "paddingLeft": 10,
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 6"
 },
 "id": "Button_17EB42B7_3106_0014_41B0_CE70CBDDF438",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "paddingRight": 0,
 "minWidth": 1,
 "layout": "horizontal",
 "mode": "push",
 "verticalAlign": "middle",
 "height": 36,
 "label": "Lorem ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "shadow": false,
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "class": "Button",
 "textDecoration": "none",
 "paddingLeft": 10,
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 7"
 },
 "id": "Button_17EB52B7_3106_0014_419C_439E593AEC43",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "paddingRight": 0,
 "minWidth": 1,
 "layout": "horizontal",
 "mode": "push",
 "verticalAlign": "middle",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "shadow": false,
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "class": "Button",
 "textDecoration": "none",
 "paddingLeft": 10,
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 8"
 },
 "id": "Button_17EB62B7_3106_0014_41C5_43B38271B353",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "paddingRight": 0,
 "minWidth": 1,
 "layout": "horizontal",
 "mode": "push",
 "verticalAlign": "middle",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "shadow": false,
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "class": "Button",
 "textDecoration": "none",
 "paddingLeft": 10,
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 9"
 },
 "id": "Button_17EB72B7_3106_0014_41B9_61857077BF4A",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "paddingRight": 0,
 "minWidth": 1,
 "layout": "horizontal",
 "mode": "push",
 "verticalAlign": "middle",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "shadow": false,
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "class": "Button",
 "textDecoration": "none",
 "paddingLeft": 10,
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 10"
 },
 "id": "Button_17EB92B7_3106_0014_41B2_34A3E3F63779",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "paddingRight": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "minWidth": 1,
 "layout": "horizontal",
 "mode": "push",
 "verticalAlign": "middle",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "shadow": false,
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "class": "Button",
 "textDecoration": "none",
 "paddingLeft": 10,
 "pressedBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button <BACK"
 },
 "id": "Button_168CA310_3106_01EC_41C7_72CE0522951A",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "paddingRight": 0,
 "minWidth": 1,
 "layout": "horizontal",
 "mode": "push",
 "verticalAlign": "middle",
 "height": 50,
 "label": "BACK",
 "rollOverFontSize": 18,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_168D8311_3106_01EC_41B0_F2D40886AB88, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "shadow": false,
 "iconHeight": 30,
 "iconURL": "skin/Button_168CA310_3106_01EC_41C7_72CE0522951A.png",
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "rollOverFontFamily": "Oswald",
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/Button_168CA310_3106_01EC_41C7_72CE0522951A_rollover.png",
 "class": "Button",
 "textDecoration": "none",
 "paddingLeft": 5,
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 30,
 "rollOverBackgroundOpacity": 0.8
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_168C8310_3106_01EC_4187_B16F315A4A23",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "horizontalAlign": "left",
 "borderSize": 0,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "verticalAlign": "top",
 "minWidth": 1,
 "height": 1,
 "shadow": false,
 "backgroundOpacity": 0.5,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "data": {
  "name": "line separator"
 },
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "id": "Container_168D7310_3106_01EC_41BE_5FCBD9E27BE4",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "layout": "absolute",
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "contentOpaque": false,
 "verticalAlign": "top",
 "height": 8,
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 1"
 },
 "id": "Button_168D6310_3106_01EC_41B8_A0B6BE627547",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "paddingRight": 0,
 "minWidth": 1,
 "layout": "horizontal",
 "mode": "push",
 "verticalAlign": "middle",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "shadow": false,
 "iconHeight": 32,
 "shadowBlurRadius": 15,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 5,
 "rollOverShadow": false,
 "paddingBottom": 0,
 "class": "Button",
 "textDecoration": "none",
 "paddingLeft": 10,
 "fontStyle": "italic",
 "rollOverShadowBlurRadius": 18,
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 2"
 },
 "id": "Button_168D5310_3106_01EC_41B5_96D9387401B8",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "paddingRight": 0,
 "minWidth": 1,
 "layout": "horizontal",
 "mode": "push",
 "verticalAlign": "middle",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "shadow": false,
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 23,
 "paddingBottom": 0,
 "class": "Button",
 "textDecoration": "none",
 "paddingLeft": 10,
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 3"
 },
 "id": "Button_168D3310_3106_01EC_41AC_5D524E4677A5",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "paddingRight": 0,
 "pressedLabel": "Lorem Ipsum",
 "minWidth": 1,
 "layout": "horizontal",
 "mode": "push",
 "verticalAlign": "middle",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "shadow": false,
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "class": "Button",
 "textDecoration": "none",
 "paddingLeft": 10,
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 4"
 },
 "id": "Button_168D2310_3106_01EC_41B8_9D7D1B2B55FA",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "paddingRight": 0,
 "minWidth": 1,
 "layout": "horizontal",
 "mode": "push",
 "verticalAlign": "middle",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "shadow": false,
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "class": "Button",
 "textDecoration": "none",
 "paddingLeft": 10,
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 5"
 },
 "id": "Button_168D0310_3106_01EC_41A1_FA8FC42E6FF3",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "paddingRight": 0,
 "minWidth": 1,
 "layout": "horizontal",
 "mode": "push",
 "verticalAlign": "middle",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "shadow": false,
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "class": "Button",
 "textDecoration": "none",
 "paddingLeft": 10,
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 6"
 },
 "id": "Button_168DE310_3106_01EC_4192_6A9F468A0ADE",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "paddingRight": 0,
 "minWidth": 1,
 "layout": "horizontal",
 "mode": "push",
 "verticalAlign": "middle",
 "height": 36,
 "label": "Lorem ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "shadow": false,
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "class": "Button",
 "textDecoration": "none",
 "paddingLeft": 10,
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 7"
 },
 "id": "Button_168DD310_3106_01EC_4190_7815FA70349E",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "paddingRight": 0,
 "minWidth": 1,
 "layout": "horizontal",
 "mode": "push",
 "verticalAlign": "middle",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "shadow": false,
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "class": "Button",
 "textDecoration": "none",
 "paddingLeft": 10,
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 8"
 },
 "id": "Button_168DB310_3106_01EC_41B2_3511AA5E40E1",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "paddingRight": 0,
 "minWidth": 1,
 "layout": "horizontal",
 "mode": "push",
 "verticalAlign": "middle",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "shadow": false,
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "class": "Button",
 "textDecoration": "none",
 "paddingLeft": 10,
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 9"
 },
 "id": "Button_168DA310_3106_01EC_41BE_DF88732C2A28",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "paddingRight": 0,
 "minWidth": 1,
 "layout": "horizontal",
 "mode": "push",
 "verticalAlign": "middle",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "shadow": false,
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "class": "Button",
 "textDecoration": "none",
 "paddingLeft": 10,
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "data": {
  "name": "Button text 10"
 },
 "id": "Button_168D9311_3106_01EC_41A8_3BD8769525D6",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "paddingRight": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "minWidth": 1,
 "layout": "horizontal",
 "mode": "push",
 "verticalAlign": "middle",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "shadow": false,
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "class": "Button",
 "textDecoration": "none",
 "paddingLeft": 10,
 "pressedBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "maxHeight": 200,
 "maxWidth": 200,
 "width": "25%",
 "id": "Image_1E18723C_57F1_802D_41C5_8325536874A5",
 "borderSize": 0,
 "url": "skin/Image_1E18723C_57F1_802D_41C5_8325536874A5.jpg",
 "minHeight": 1,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "minWidth": 1,
 "verticalAlign": "top",
 "height": "100%",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Image",
 "borderRadius": 0,
 "paddingBottom": 0,
 "scaleMode": "fit_inside",
 "paddingLeft": 0,
 "propagateClick": false,
 "data": {
  "name": "agent photo"
 }
},
{
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#04A3E1",
 "id": "HTMLText_1E18423C_57F1_802D_41C4_458DB7F892AC",
 "scrollBarVisible": "rollOver",
 "width": "75%",
 "borderSize": 0,
 "minHeight": 1,
 "paddingRight": 10,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "height": "100%",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.41vh;font-family:'Oswald';\"><B><I>JOHN DOE</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.41vh;font-family:'Oswald';\"><I>Licensed Real Estate Salesperson</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.68vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.05vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.68vh;font-family:'Oswald';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.68vh;font-family:'Oswald';\"><I>jhondoe@realestate.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.68vh;font-family:'Oswald';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.05vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.05vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.05vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.05vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.05vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV></div>",
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingBottom": 10,
 "paddingLeft": 10,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "HTMLText19460"
 }
},
{
 "maxHeight": 101,
 "maxWidth": 101,
 "width": 44,
 "id": "IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83",
 "transparencyActive": false,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "minWidth": 1,
 "mode": "push",
 "verticalAlign": "middle",
 "height": 44,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, true, 0, null, null, false)",
 "iconURL": "skin/IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83.png",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83_rollover.png",
 "class": "IconButton",
 "paddingLeft": 0,
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "IconButton Thumblist"
 }
},
{
 "maxHeight": 101,
 "maxWidth": 101,
 "width": 44,
 "id": "IconButton_2B917411_3593_B9D7_41C6_8D1102463EC5",
 "transparencyActive": false,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "minWidth": 1,
 "mode": "push",
 "verticalAlign": "middle",
 "height": 44,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, true, 0, null, null, false)",
 "iconURL": "skin/IconButton_2B917411_3593_B9D7_41C6_8D1102463EC5.png",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_2B917411_3593_B9D7_41C6_8D1102463EC5_rollover.png",
 "class": "IconButton",
 "paddingLeft": 0,
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "IconButton Photoalbum"
 }
},
{
 "maxHeight": 101,
 "maxWidth": 101,
 "width": 44,
 "id": "IconButton_2BBEA1DF_35B3_BA4B_41B8_DE69AA453A15",
 "transparencyActive": true,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "minWidth": 1,
 "mode": "push",
 "verticalAlign": "middle",
 "height": 44,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, true, 0, null, null, false)",
 "iconURL": "skin/IconButton_2BBEA1DF_35B3_BA4B_41B8_DE69AA453A15.png",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_2BBEA1DF_35B3_BA4B_41B8_DE69AA453A15_rollover.png",
 "class": "IconButton",
 "paddingLeft": 0,
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "IconButton Floorplan"
 }
},
{
 "maxHeight": 101,
 "maxWidth": 101,
 "width": 44,
 "id": "IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7",
 "transparencyActive": false,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "minWidth": 1,
 "mode": "push",
 "verticalAlign": "middle",
 "height": 44,
 "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, true, 0, null, null, false)",
 "iconURL": "skin/IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7.png",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7_rollover.png",
 "class": "IconButton",
 "paddingLeft": 0,
 "pressedIconURL": "skin/IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7_pressed.png",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "IconButton Realtor"
 }
},
{
 "maxHeight": 101,
 "maxWidth": 101,
 "width": 44,
 "id": "IconButton_2A159B11_35B0_EFD6_41C9_DF408F8120FF",
 "transparencyActive": false,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "minWidth": 1,
 "mode": "push",
 "verticalAlign": "middle",
 "height": 44,
 "iconURL": "skin/IconButton_2A159B11_35B0_EFD6_41C9_DF408F8120FF.png",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_2A159B11_35B0_EFD6_41C9_DF408F8120FF_rollover.png",
 "paddingLeft": 0,
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "IconButton Video"
 }
},
{
 "maxHeight": 101,
 "maxWidth": 101,
 "width": 50,
 "id": "IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F",
 "transparencyActive": false,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "minWidth": 1,
 "mode": "push",
 "verticalAlign": "middle",
 "height": 50,
 "iconURL": "skin/IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F.png",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "visible": false,
 "pressedIconURL": "skin/IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F_pressed.png",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "IconButton --"
 }
}],
 "start": "this.playAudioList([this.audio_E3588048_CA78_86CA_41DA_FB05399CF9E6]); this.init(); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "data": {
  "name": "Player468"
 },
 "children": [
  "this.MainViewer",
  "this.Container_22BB12F4_3075_D173_4184_EC3BC4955417",
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_4041C033_7558_FB6E_41CE_BFE427F3AF92",
  "this.Container_062AB830_1140_E215_41AF_6C9D65345420",
  "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
  "this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
  "this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
  "this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9",
  "this.Container_50E57579_424B_1CC1_41C7_2A7D7DE232E6",
  "this.Container_58B883FD_4396_7C5F_41B3_61F626F14414"
 ],
 "id": "rootPlayer",
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 0.5,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "layout": "absolute",
 "minHeight": 20,
 "horizontalAlign": "left",
 "backgroundPreloadEnabled": true,
 "borderSize": 0,
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "scripts": {
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "unregisterKey": function(key){  delete window[key]; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "registerKey": function(key, value){  window[key] = value; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "existsKey": function(key){  return key in window; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getKey": function(key){  return window[key]; }
 },
 "paddingRight": 0,
 "defaultVRPointer": "laser",
 "scrollBarMargin": 2,
 "minWidth": 20,
 "downloadEnabled": false,
 "contentOpaque": false,
 "verticalAlign": "top",
 "height": "100%",
 "shadow": false,
 "paddingTop": 0,
 "class": "Player",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "paddingLeft": 0,
 "mouseWheelEnabled": true,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "visible",
 "desktopMipmappingEnabled": false
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
