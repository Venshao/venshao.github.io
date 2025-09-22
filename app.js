const { createApp } = Vue;

createApp({
    data() {
        return {
            isScrolled: false,
            mobileMenuOpen: false,
            features: [
                {
                    id: 1,
                    icon: 'fas fa-bolt',
                    title: '极速连接',
                    description: '采用先进的P2P技术，实现毫秒级连接建立，让您的网络体验更加流畅。'
                },
                {
                    id: 2,
                    icon: 'fas fa-rocket',
                    title: '高效稳定',
                    description: '优化的网络传输算法，确保连接稳定可靠，支持长时间运行不掉线。'
                },
                {
                    id: 3,
                    icon: 'fas fa-plug',
                    title: '即插即用',
                    description: '无需复杂配置，一键启动即可使用，支持自动网络检测和优化。'
                },
                {
                    id: 4,
                    icon: 'fas fa-gamepad',
                    title: '游戏优化',
                    description: '专为游戏联机优化，低延迟高稳定，支持主流游戏平台和联机需求。'
                },
                {
                    id: 5,
                    icon: 'fas fa-bolt',
                    title: '文件传输',
                    description: '支持大文件高速传输，断点续传功能，让文件分享更加便捷。'
                },
                {
                    id: 6,
                    icon: 'fas fa-mobile-alt',
                    title: '多平台支持',
                    description: '支持Windows、macOS、Linux等多平台，跨设备无缝连接。'
                }
            ],
            steps: [
                {
                    title: '下载安装',
                    description: '下载适合您操作系统的Neno客户端，直接运行即可使用。'
                },
                {
                    title: '创建连接',
                    description: '输入连接码或扫描二维码，快速建立与其他设备的连接。'
                },
                {
                    title: '开始使用',
                    description: '连接建立后，即可进行文件传输、远程控制或游戏联机。'
                }
            ],
            platforms: [
                {
                    name: 'Windows',
                    icon: 'fab fa-windows',
                    description: '支持Windows 10及以上版本',
                    version: '0.0.1-alpha',
                    size: '5.3 MB',
                    downloadUrl: 'https://gitee.com/qwxrepo/natun/releases/download/v0.0.1-alpha/cli-windows-x64.zip'
                },
                {
                    name: 'macOS',
                    icon: 'fab fa-apple',
                    description: '支持macOS 10.15及以上版本',
                    version: '0.0.1-alpha',
                    size: '8.9 MB',
                    downloadUrl: 'https://gitee.com/qwxrepo/natun/releases/download/v0.0.1-alpha/cli-mac-x64'
                },
                {
                    name: 'Linux',
                    icon: 'fab fa-linux',
                    description: '支持主流Linux发行版',
                    version: '0.0.1-alpha',
                    size: '8.9 MB',
                    downloadUrl: 'https://gitee.com/qwxrepo/natun/releases/download/v0.0.1-alpha/cli-linux-x64'
                }
            ],
            techStack: [
                { name: 'P2P技术', icon: 'fas fa-network-wired' },
                { name: 'NAT穿透', icon: 'fas fa-exchange-alt' },
                { name: '高效传输', icon: 'fas fa-tachometer-alt' },
                { name: '多平台支持', icon: 'fas fa-mobile-alt' },
                { name: '低延迟传输', icon: 'fas fa-tachometer-alt' },
                { name: '自动优化', icon: 'fas fa-magic' }
            ]
        }
    },
    mounted() {
        // 监听滚动事件
        window.addEventListener('scroll', this.handleScroll);
        
        // 初始化粒子效果
        this.initParticles();
        
        // 添加平滑滚动
        this.addSmoothScroll();
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            this.isScrolled = window.scrollY > 50;
        },
        toggleMobileMenu() {
            this.mobileMenuOpen = !this.mobileMenuOpen;
        },
        scrollTo(elementId) {
            const element = document.getElementById(elementId);
            if (element) {
                element.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
            this.mobileMenuOpen = false;
        },
        downloadFile(platform) {
            // 模拟下载功能
            if (platform.downloadUrl) {
                window.open(platform.downloadUrl, '_blank');
            } else {
                alert(`正在准备下载 ${platform.name} 版本...`);
            }
        },
        initParticles() {
            const particlesContainer = document.querySelector('.hero-particles');
            if (!particlesContainer) return;
            
            // 创建粒子效果
            for (let i = 0; i < 50; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.top = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 3 + 's';
                particle.style.animationDuration = (Math.random() * 3 + 2) + 's';
                particlesContainer.appendChild(particle);
            }
        },
        addSmoothScroll() {
            // 为所有内部链接添加平滑滚动
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', (e) => {
                    e.preventDefault();
                    const target = document.querySelector(anchor.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                });
            });
        },
        openGithubProject() {
            window.open('https://github.com/Venshao/natun', '_blank');
        }
    }
}).mount('#app');
