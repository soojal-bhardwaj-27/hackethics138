// Initialize AOS animations
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Initialize AOS
  AOS.init({
    duration: 800,
    easing: 'ease-out',
    once: false,
    mirror: true
  });

  // Initialize particles.js
  initParticles();

  // Initialize custom cursor
  initCursor();

  // Initialize typing animation
  initTypingAnimation();

  // Initialize navigation
  initNavigation();

  // Initialize shop tabs
  initShopTabs();

  // Initialize course filter
  initCourseFilter();

  // Initialize count up animations
  initCountUp();

  // Initialize scroll animations
  initScrollAnimations();
});

// Particles.js initialization
function initParticles() {
  particlesJS('particles-js', {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: '#0DF5E3'
      },
      shape: {
        type: 'circle',
        stroke: {
          width: 0,
          color: '#000000'
        },
        polygon: {
          nb_sides: 5
        }
      },
      opacity: {
        value: 0.3,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: true,
          speed: 2,
          size_min: 0.1,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: '#0DF5E3',
        opacity: 0.2,
        width: 1
      },
      move: {
        enable: true,
        speed: 1,
        direction: 'none',
        random: true,
        straight: false,
        out_mode: 'out',
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: true,
          mode: 'grab'
        },
        onclick: {
          enable: true,
          mode: 'push'
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 140,
          line_linked: {
            opacity: 0.5
          }
        },
        push: {
          particles_nb: 4
        }
      }
    },
    retina_detect: true
  });
}

// Custom cursor initialization
function initCursor() {
  const cursor = document.querySelector('.cursor');
  const cursorFollower = document.querySelector('.cursor-follower');
  
  document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.1
    });
    
    gsap.to(cursorFollower, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.3
    });
  });
  
  document.addEventListener('mousedown', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(0.8)';
    cursorFollower.style.transform = 'translate(-50%, -50%) scale(0.8)';
  });
  
  document.addEventListener('mouseup', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(1)';
    cursorFollower.style.transform = 'translate(-50%, -50%) scale(1)';
  });
  
  // Change cursor on hoverable elements
  const hoverElements = document.querySelectorAll('a, button, .play-button, .play-button-sm');
  
  hoverElements.forEach(item => {
    item.addEventListener('mouseenter', () => {
      cursor.style.backgroundColor = 'var(--color-accent-primary)';
      cursorFollower.style.borderColor = 'var(--color-accent-primary)';
      cursorFollower.style.width = '60px';
      cursorFollower.style.height = '60px';
    });
    
    item.addEventListener('mouseleave', () => {
      cursor.style.backgroundColor = 'var(--color-accent-primary)';
      cursorFollower.style.borderColor = 'var(--color-accent-primary)';
      cursorFollower.style.width = '40px';
      cursorFollower.style.height = '40px';
    });
  });
}

// Typing animation initialization
function initTypingAnimation() {
  const codeElement = document.getElementById('typing-code');
  if (!codeElement) return;
  
  const codeSnippet = `# Ethical Hacking Script
import sys
import socket
import ipaddress
from scapy.all import *

def scan_network(target_ip):
    """Scan network for active hosts"""
    print(f"Scanning network: {target_ip}...")
    
    # Create network range
    network = ipaddress.IPv4Network(target_ip)
    active_hosts = []
    
    for ip in network.hosts():
        # Send ICMP ping request
        response = sr1(
            IP(dst=str(ip))/ICMP(),
            timeout=1,
            verbose=0
        )
        
        if response:
            active_hosts.append(str(ip))
            print(f"Host {ip} is active")
    
    return active_hosts

def scan_ports(target_ip, ports):
    """Scan ports on target IP"""
    open_ports = []
    
    for port in ports:
        sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        sock.settimeout(1)
        result = sock.connect_ex((target_ip, port))
        
        if result == 0:
            open_ports.append(port)
            print(f"Port {port} is open")
            
        sock.close()
    
    return open_ports

# Main execution
if __name__ == "__main__":
    target = "192.168.1.0/24"
    port_range = [21, 22, 23, 25, 80, 443, 8080]
    
    # Start scanning
    hosts = scan_network(target)
    
    for host in hosts:
        print(f"\\nScanning ports on {host}:")
        open_ports = scan_ports(host, port_range)`;
  
  let i = 0;
  const typingSpeed = 20; // milliseconds per character
  
  function typeCode() {
    if (i < codeSnippet.length) {
      let char = codeSnippet.charAt(i);
      
      if (char === '\n') {
        codeElement.innerHTML += '<br>';
      } else if (char === ' ') {
        codeElement.innerHTML += '&nbsp;';
      } else {
        codeElement.innerHTML += char;
      }
      
      i++;
      setTimeout(typeCode, typingSpeed);
    } else {
      // Reset and start again after a pause
      setTimeout(() => {
        codeElement.innerHTML = '';
        i = 0;
        typeCode();
      }, 5000);
    }
  }
  
  // Start typing animation
  typeCode();
}

// Navigation initialization
function initNavigation() {
  const header = document.querySelector('.header');
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const nav = document.querySelector('.nav');
  const navLinks = document.querySelectorAll('.nav__link');
  const themeToggle = document.querySelector('.theme-toggle');
  
  // Scroll header effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  
  // Mobile menu toggle
  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
      nav.classList.toggle('active');
      
      if (nav.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
        gsap.to(mobileMenuToggle.querySelectorAll('span'), {
          rotation: 45,
          y: 8,
          duration: 0.3
        });
        gsap.to(mobileMenuToggle.querySelectorAll('span')[1], {
          opacity: 0,
          duration: 0.3
        });
        gsap.to(mobileMenuToggle.querySelectorAll('span')[2], {
          rotation: -45,
          y: -8,
          duration: 0.3
        });
      } else {
        document.body.style.overflow = '';
        gsap.to(mobileMenuToggle.querySelectorAll('span'), {
          rotation: 0,
          y: 0,
          opacity: 1,
          duration: 0.3
        });
      }
    });
  }
  
  // Nav links active state
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      if (window.innerWidth <= 768) {
        nav.classList.remove('active');
        document.body.style.overflow = '';
        gsap.to(mobileMenuToggle.querySelectorAll('span'), {
          rotation: 0,
          y: 0,
          opacity: 1,
          duration: 0.3
        });
      }
    });
  });
  
  // Theme toggle
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('light-theme');
      
      if (document.body.classList.contains('light-theme')) {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
      } else {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
      }
    });
  }
  
  // Scroll spy
  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    
    document.querySelectorAll('section').forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        document.querySelectorAll('.nav__link').forEach(link => {
          link.classList.remove('active');
          
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });
}

// Shop tabs initialization
function initShopTabs() {
  const shopTabs = document.querySelectorAll('.shop-tab');
  
  shopTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const tabId = tab.getAttribute('data-tab');
      
      // Update active tab
      document.querySelectorAll('.shop-tab').forEach(t => {
        t.classList.remove('active');
      });
      tab.classList.add('active');
      
      // Show active panel
      document.querySelectorAll('.shop-panel').forEach(panel => {
        panel.classList.remove('active');
      });
      document.getElementById(tabId).classList.add('active');
    });
  });
}

// Course filter initialization
function initCourseFilter() {
  const filterButtons = document.querySelectorAll('.course-filter__btn');
  const courseCards = document.querySelectorAll('.course-card');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter');
      
      // Update active button
      filterButtons.forEach(btn => {
        btn.classList.remove('active');
      });
      button.classList.add('active');
      
      // Filter courses
      courseCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.style.display = 'block';
          
          setTimeout(() => {
            card.style.opacity = 1;
            card.style.transform = 'translateY(0)';
          }, 100);
        } else {
          card.style.opacity = 0;
          card.style.transform = 'translateY(20px)';
          
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });
}

// Count up animation initialization
function initCountUp() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const countElement = entry.target;
        const target = parseInt(countElement.getAttribute('data-target'));
        const duration = 2000; // ms
        const step = Math.ceil(target / (duration / 16)); // 60fps approx
        
        let current = 0;
        const timer = setInterval(() => {
          current += step;
          
          if (current >= target) {
            countElement.textContent = target.toLocaleString();
            clearInterval(timer);
          } else {
            countElement.textContent = current.toLocaleString();
          }
        }, 16);
        
        observer.unobserve(countElement);
      }
    });
  }, {
    threshold: 0.5
  });
  
  document.querySelectorAll('.count-up').forEach(counter => {
    observer.observe(counter);
  });
}

// Scroll animations initialization
function initScrollAnimations() {
  // Hero section animations
  gsap.from('.hero__title', {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 0.2
  });
  
  gsap.from('.hero__subtitle', {
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 0.4
  });
  
  gsap.from('.hero__actions', {
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 0.6
  });
  
  // Feature cards animation
  gsap.from('.feature-card', {
    scrollTrigger: {
      trigger: '.features',
      start: 'top 80%'
    },
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 0.8
  });
  
  // Video thumbnail animation
  gsap.from('.video-thumbnail', {
    scrollTrigger: {
      trigger: '.video-showcase',
      start: 'top 80%'
    },
    opacity: 0,
    scale: 0.9,
    duration: 1
  });
  
  // Tool cards animation
  gsap.from('.tool-card', {
    scrollTrigger: {
      trigger: '.tools-grid',
      start: 'top 80%'
    },
    opacity: 0,
    x: -30,
    stagger: 0.2,
    duration: 0.8
  });
  
  // About stats animation
  gsap.from('.stat', {
    scrollTrigger: {
      trigger: '.about__stats',
      start: 'top 80%'
    },
    opacity: 0,
    y: 30,
    stagger: 0.2,
    duration: 0.8
  });
  
  // CTA section animation
  gsap.from('.cta__content', {
    scrollTrigger: {
      trigger: '.cta',
      start: 'top 80%'
    },
    opacity: 0,
    scale: 0.9,
    duration: 1
  });
}