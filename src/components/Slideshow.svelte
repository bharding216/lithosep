<script>
    let currentImage = 0;
    const images = [
      '/jrc/jrc_2.jpg',
      '/jrc/jrc_1.jpg',
      '/jrc/jrc_4.jpg',
      '/jrc/jrc_3.jpg',
      '/jrc/jrc_0.jpg',
    ];
  
    const nextImage = () => {
      currentImage = (currentImage + 1) % images.length;
    };
  
    const prevImage = () => {
      currentImage = (currentImage - 1 + images.length) % images.length;
    };
  </script>
  
  <style>
    .slideshow-container {
      position: relative;
      max-width: 100%;
      text-align: center;
    }
  
    .mySlides {
      display: none;
    }
  
    img {
      width: 100%;
      height: auto;
    }

    .prev, .next {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        font-size: 40px;
        cursor: pointer;
        border: none;
        background: none;
        color: rgb(255, 255, 255);
        outline: black;
        display: inline-block;
        background-color: none;
        padding: 8px;
    }

    .prev {
        left: 0;
    }

    .next {
        right: 0;
    }

  </style>
  
  <div class="slideshow-container">
    <button on:click={prevImage} class="prev">❮</button>

    {#each images as image, i (image)}
      <div class="mySlides" style="{i === currentImage ? 'display: block;' : 'display: none;'}">
        <img src={image} alt={`Slide ${i + 1}`} />
      </div>
    {/each}
    <button on:click={nextImage} class="next">❯</button>
  </div>
  