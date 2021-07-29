<script>
  import { createEventDispatcher } from 'svelte';
  export let visible = false;
  export let data;
  const dispatch = createEventDispatcher();
  const close = () => {
    dispatch('close', false);
  };
</script>

{#if visible}
  <div class="modal">
    <div class="modal-dialog">
      <button class="modal-close" on:click={close}>&times;</button>
      <video controls autoplay>
        <source src={data} type="video/mp4" />
        <track kind="captions" />
      </video>
    </div>
  </div>
{/if}

<style lang="scss">
  .modal {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.25);
    animation-name: appear;
    animation-duration: 300ms;
    &-dialog {
      width: 100%;
      max-width: 550px;
      background: white;
      position: relative;
      margin: 0 20px;
      max-height: calc(100vh - 40px);
      text-align: left;
      display: flex;
      flex-direction: column;
      // overflow: hidden;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);
      -webkit-animation-name: animatetop;
      -webkit-animation-duration: 0.4s;
      animation-name: slide-in;
      animation-duration: 0.5s;
    }

    &-close {
      position: absolute;
      top: -50px;
      right: -40px;
      color: rgba(white, 0.7);
      font-size: 40px;
      line-height: 40px;
      height: 40px;
      width: 40px;

      &:hover {
        color: white;
      }
    }
  }
</style>
