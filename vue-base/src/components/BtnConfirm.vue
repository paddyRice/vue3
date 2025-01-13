<script setup>
import { ref } from 'vue';

const props = defineProps({
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value),
  },
  color: {
    type: String,
    default: 'blue',
    validator: (value) =>
      ['blue', 'green', 'red', 'purple', 'orange', 'teal', 'pink', 'gray', 'yellow'].includes(value),
  },
  confirmTitle: {
    type: String,
    default: '确认操作',
  },
  confirmMessage: {
    type: String,
    default: '您确定要执行此操作吗？',
  },
  confirmButtonText: {
    type: String,
    default: '确定',
  },
  cancelButtonText: {
    type: String,
    default: '取消',
  },
});

const showModal = ref(false);
const emit = defineEmits(['confirm', 'cancel']);

const getButtonStyle = () => ({
  padding: props.size === 'sm' ? '5px 10px' : props.size === 'lg' ? '15px 30px' : '10px 20px',
  fontSize: props.size === 'sm' ? '14px' : props.size === 'lg' ? '18px' : '16px',
});

const getColorStyle = () => {
  const colors = {
    blue: { button: 'linear-gradient(135deg, #409eff, #337ecc)' },
    green: { button: 'linear-gradient(135deg, #67c23a, #4e9a2f)' },
    red: { button: 'linear-gradient(135deg, #f56c6c, #c45656)' },
    purple: { button: 'linear-gradient(135deg, #9c27b0, #7b1fa2)' },
    orange: { button: 'linear-gradient(135deg, #e6a23c, #d48207)' },
    teal: { button: 'linear-gradient(135deg, #20c997, #1aa179)' },
    pink: { button: 'linear-gradient(135deg, #ff7eb9, #ff5c8d)' },
    gray: { button: 'linear-gradient(135deg, #a0a0a0, #808080)' },
    yellow: { button: 'linear-gradient(135deg, #ffc107, #e0a800)' },
  };
  return colors[props.color] || colors.blue;
};

const handleConfirm = () => {
  emit('confirm');
  showModal.value = false;
};

const handleCancel = () => {
  emit('cancel');
  showModal.value = false;
};
</script>

<template>
  <div>
    <button
      class="btn-confirm"
      :style="{ ...getButtonStyle(), background: getColorStyle().button }"
      @click.stop="showModal = true"
    >
      <slot></slot>
    </button>

    <div v-if="showModal" class="modal-overlay" @click.self="handleCancel">
      <div class="modal">
        <h3>{{ confirmTitle }}</h3>
        <p>{{ confirmMessage }}</p>
        <div class="modal-actions">
          <button class="modal-button cancel" @click="handleCancel">
            {{ cancelButtonText }}
          </button>
          <button
            class="modal-button confirm"
            :style="{ background: getColorStyle().button }"
            @click="handleConfirm"
          >
            {{ confirmButtonText }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.btn-confirm {
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.btn-confirm:hover {
  opacity: 0.9;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal {
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  width: 300px;
  padding: 20px;
  text-align: center;
  animation: fadeIn 0.3s ease;
}

.modal h3 {
  margin: 0 0 10px;
  font-size: 18px;
  color: #333;
}

.modal p {
  margin: 0 0 20px;
  color: #666;
}

.modal-actions {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.modal-button {
  padding: 8px 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  transition: background 0.3s ease;
}

.modal-button.confirm {
  color: white;
}

.modal-button.confirm:hover {
  opacity: 0.9;
}

.modal-button.cancel {
  background: #f0f0f0;
  color: #333;
}

.modal-button.cancel:hover {
  background: #e0e0e0;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
