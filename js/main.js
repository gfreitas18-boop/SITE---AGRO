// Menu mobile
document.querySelector('.mobile-menu-btn').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('active');
});

// Filtros de produtos
document.querySelectorAll('.filtro-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filtro-btn').forEach(b => b.classList.remove('ativo'));
        btn.classList.add('ativo');
        const filtro = btn.dataset.filtro;
        document.querySelectorAll('.produto-card').forEach(card => {
            card.style.display = filtro === 'todos' || card.dataset.categoria === filtro ? 'block' : 'none';
        });
    });
});

// Calculadora de Produtividade
function calcularProdutividade() {
    const area = parseFloat(document.getElementById('area-prod').value);
    const producao = parseFloat(document.getElementById('producao-prod').value);
    const resultado = document.getElementById('resultado-prod');
    
    if (!area || !producao) {
        resultado.style.display = 'block';
        resultado.innerHTML = '⚠️ Preencha todos os campos!';
        return;
    }
    
    const produtividade = (producao / area).toFixed(2);
    resultado.style.display = 'block';
    resultado.innerHTML = `📊 Produtividade: <strong>${produtividade} ton/hectare</strong>`;
}

// Calculadora de Custos
function calcularCustos() {
    const area = parseFloat(document.getElementById('area-custo').value);
    const insumos = parseFloat(document.getElementById('insumos-custo').value) || 0;
    const maoObra = parseFloat(document.getElementById('mao-obra-custo').value) || 0;
    const maquinario = parseFloat(document.getElementById('maquinario-custo').value) || 0;
    const resultado = document.getElementById('resultado-custo');
    
    if (!area) {
        resultado.style.display = 'block';
        resultado.innerHTML = '⚠️ Preencha a área!';
        return;
    }
    
    const total = insumos + maoObra + maquinario;
    const custoHectare = (total / area).toFixed(2);
    resultado.style.display = 'block';
    resultado.innerHTML = `💰 Custo Total: <strong>R$ ${total.toLocaleString('pt-BR')}</strong><br>📊 Custo/hectare: <strong>R$ ${custoHectare}</strong>`;
}

// Simulador de Financiamento
function simularFinanciamento() {
    const valor = parseFloat(document.getElementById('valor-fin').value);
    const taxa = parseFloat(document.getElementById('taxa-fin').value);
    const prazo = parseInt(document.getElementById('prazo-fin').value);
    const resultado = document.getElementById('resultado-fin');
    
    if (!valor || !taxa || !prazo) {
        resultado.style.display = 'block';
        resultado.innerHTML = '⚠️ Preencha todos os campos!';
        return;
    }
    
    const taxaMensal = (taxa / 100) / 12;
    const parcela = (valor * taxaMensal) / (1 - Math.pow(1 + taxaMensal, -prazo));
    const total = (parcela * prazo).toFixed(2);
    
    resultado.style.display = 'block';
    resultado.innerHTML = `💵 Parcela mensal: <strong>R$ ${parcela.toFixed(2)}</strong><br>📊 Total: <strong>R$ ${total}</strong>`;
}

// Previsão do Tempo (simulado - substitua pela API real)
function buscarClima() {
    const cidade = document.getElementById('cidade-tempo').value;
    const resultado = document.getElementById('resultado-tempo');
    
    if (!cidade) {
        resultado.style.display = 'block';
        resultado.innerHTML = '⚠️ Digite uma cidade!';
        return;
    }
    
    // Simulação - substitua por API do OpenWeatherMap
    resultado.style.display = 'block';
    resultado.innerHTML = `🌤️ <strong>${cidade}</strong>: 25°C, Parcialmente nublado, Umidade: 65%<br>☔ Chance de chuva: 20%`;
}

// Calculadora de Pegada de Carbono
function calcularCarbono() {
    const area = parseFloat(document.getElementById('area-carbono').value);
    const insumos = parseFloat(document.getElementById('insumos-carbono').value) || 0;
    const resultado = document.getElementById('resultado-carbono');
    
    if (!area) {
        resultado.style.display = 'block';
        resultado.innerHTML = '⚠️ Preencha a área!';
        return;
    }
    
    const co2 = (area * 2.5 + insumos * 0.001).toFixed(2);
    resultado.style.display = 'block';
    resultado.innerHTML = `🌍 Pegada de Carbono: <strong>${co2} toneladas de CO₂</strong><br>💡 Dica: Use adubo orgânico para reduzir em 30%`;
}

// Formulário de contato
document.getElementById('form-contato').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('✅ Mensagem enviada com sucesso! Entraremos em contato em breve.');
    e.target.reset();
});

// Newsletter
document.getElementById('form-newsletter').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('✅ Obrigado por se inscrever! Você receberá nossas notícias semanalmente.');
    e.target.reset();
});

// Expandir ferramentas
document.getElementById('expandir-ferramentas').addEventListener('click', () => {
    document.querySelectorAll('.calculadora-card').forEach(card => {
        card.style.display = 'block';
    });
    document.getElementById('expandir-ferramentas').style.display = 'none';
});

// Exibição inicial das calculadoras (todas visíveis)
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.calculadora-card').forEach(card => {
        card.style.display = 'block';
    });
});
