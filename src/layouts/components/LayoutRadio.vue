<template>
  <a-radio
    :class="{
      [`layout-radio--aside-${asideTheme}`]: true,
      [`layout-radio--header-${headerTheme}`]: true
    }"
  ></a-radio>
</template>

<script setup>
defineProps({
  asideTheme: {
    type: String,
    default: ''
  },
  asideZIndex: {
    type: Number,
    default: 1
  },
  headerTheme: {
    type: String,
    default: ''
  },
  headerZIndex: {
    type: Number,
    default: 0
  }
})
</script>

<style lang="less" scoped>
.ant-radio-wrapper {
  position: relative;
  width: 44px;
  height: 36px;
  overflow: hidden;
  background: #eff1f4;
  border-radius: @border-radius-sm;
  box-shadow: 0 6px 36px 0 rgb(0 0 0 / 8%);

  &.layout-radio {
    &--aside {
      &-dark {
        &::before {
          background: #001529;
        }
      }

      &-light {
        &::before {
          background: #fff;
        }
      }
    }

    &--header {
      &-dark {
        &::after {
          background: #001529;
        }
      }

      &-light {
        &::after {
          background: #fff;
        }
      }
    }
  }

  &::before,
  &::after {
    position: absolute;
    display: block;
    content: '';
    border: 0;
    border-radius: 0;
  }

  &::before {
    z-index: v-bind('asideZIndex');
    width: 33%;
    height: 100%;
  }

  &::after {
    z-index: v-bind('headerZIndex');
    width: 100%;
    height: 25%;
  }

  :deep(.ant-radio) {
    position: absolute;
    right: 7px;
    bottom: 7px;
    z-index: 2;

    .ant-radio-inner {
      background: transparent;
      border: 0;
      border-radius: 0;

      &::after {
        position: absolute;
        top: 16px;
        left: 12px;
        width: 7px;
        height: 12px;
        background: transparent;
        border: 1px solid @color-primary;
        border-inline-start: 0;
        border-top: 0;
        border-radius: 0;
        transition: all 0.2s cubic-bezier(0.12, 0.4, 0.29, 1.46) 0.1s;
        transform: rotate(45deg) scale(1) translate(-50%, -50%) scale(1);
      }
    }
  }
}

:deep(.ant-radio-checked) {
  &::after {
    border: none;
  }
}
</style>
