<template>
  <div class="about-page">
    <section class="orbit">
      <div class="avatar-wrap">
        <img
          src="https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg"
          alt="个人照片"
        />
      </div>
      <div
        v-for="(bubble, index) in bubbles"
        :key="bubble.text"
        class="bubble"
        :style="getBubbleStyle(index, bubbles.length)"
      >
        {{ bubble.text }}
      </div>
    </section>

    <section class="profile-text">
      <h2>关于我</h2>
      <p>一名前端开发，喜欢用小 Demo 学习和记录遇到的各种前端场景。</p>
    </section>
  </div>
</template>

<script setup lang="ts">
const bubbles = [
  { text: '乐观', ring: 1 },
  { text: '细心', ring: 2 },
  { text: '爱折腾', ring: 1 },
  { text: '喜欢分享', ring: 2 },
  { text: '热爱学习', ring: 1 },
  { text: '代码洁癖', ring: 2 }
]

const getBubbleStyle = (index: number, total: number) => {
  const baseAngle = (index / total) * Math.PI * 2
  const ringRadius = bubbles[index].ring === 1 ? 170 : 135
  const x = Math.cos(baseAngle) * ringRadius
  const y = Math.sin(baseAngle) * ringRadius
  return {
    transform: `translate(${x}px, ${y}px)`,
    animationDelay: `${index * 0.3}s`
  }
}
</script>

<style scoped>
.about-page {
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
}

.orbit {
  position: relative;
  width: 420px;
  height: 420px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle at center, rgba(99, 102, 241, 0.28), transparent 62%);
}

.avatar-wrap {
  width: 180px;
  height: 180px;
  border-radius: 999px;
  overflow: hidden;
  border: 4px solid rgba(255, 255, 255, 0.9);
  box-shadow: 0 22px 50px rgba(0, 0, 0, 0.35), 0 0 30px rgba(99, 102, 241, 0.4);
}

.avatar-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.bubble {
  position: absolute;
  padding: 6px 14px;
  border-radius: 999px;
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  font-size: 14px;
  color: var(--text-color);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);
  /* animation: float 6s ease-in-out infinite; */
}

.profile-text {
  text-align: center;
  max-width: 360px;
}

.profile-text h2 {
  font-size: 22px;
  font-weight: 600;
}

.profile-text p {
  margin-top: 6px;
  font-size: 14px;
  color: var(--text-muted);
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
}

@media (max-width: 768px) {
  .orbit {
    width: 300px;
    height: 300px;
  }

  .avatar-wrap {
    width: 140px;
    height: 140px;
  }
}
</style>