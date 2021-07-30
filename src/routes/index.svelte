<script default>
  import Modal from '$lib/Modal.svelte';
  let imgs = [
    {
      url: '/1.png',
      label: '混合体2020showreel',
      video: '/video/1.mp4'
    },
    {
      url: '/2.png',
      label: 'LOL-太空律动',
      video: '/video/2.mp4'
    },
    {
      url: '/3.png',
      label: '热血航线',
      video: '/video/3.mp4'
    },
    {
      url: '/4.png',
      label: '阴阳师×鬼灭 联动pv',
      video: '/video/4.mp4'
    },
    {
      url: '/5.png',
      label: 'QQ炫舞手游-6月版本',
      video: '/video/5.mp4'
    },
    {
      url: '/6.png',
      label: '王者荣耀-破晓版本',
      video: '/video/6.mp4'
    },
    {
      url: '/7.png',
      label: 'LOL冠军手办',
      video: '/video/7.mp4'
    },
    {
      url: '/8.jpg',
      label: '奇迹暖暖・废墟有生',
      video: '/video/8.mp4'
    }
  ];

  let visible = false;
  let data = '';
  const openModal = (video) => {
    data = video;
    visible = true;
  };

  const modalOpration = ({ detail }) => {
    visible = detail;
  };
</script>

<section>
  <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    {#each imgs as img}
      <div
        class="cursor-pointer game relative overflow-hidden"
        on:click={() => openModal(img.video)}
      >
        <img src={img.url} alt={img.label} />
        <div class="label rounded-sm px-4 py-2 text-lg leading-7 absolute">
          {img.label}
        </div>
      </div>
    {/each}
  </div>
</section>

<Modal {visible} {data} on:close={modalOpration} />

<style lang="scss">
  section {
    .game {
      display: flex;
      align-items: center;
      justify-content: center;
      &:hover {
        .label {
          top: 50%;
        }
        &::after {
          transform: scale(3, 3);
        }
      }
      .label {
        top: 150%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        border: 1px solid white;
        transition: all 0.2s ease-in-out;
        z-index: 2;
      }
      &::after {
        content: '';
        background: rgba(0, 0, 0, 0.5);
        position: absolute;
        z-index: 1;
        height: 100%;
        width: 100%;
        left: 50%;
        top: 50%;
        border-radius: 50%;
        transform: scale(0, 0);
        transition: all 0.4s;
      }
    }
  }
</style>
