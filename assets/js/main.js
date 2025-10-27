

function updateProfileInfo(profileData){
    // Atualização da foto
    const profile_photo = document.getElementById("profile-photo");
    profile_photo.src = profileData.perfil.foto_url;
    profile_photo.alt = profileData.perfil.nome;

    // Atualização do nome
    const profile_name = document.getElementById("profile-name");
    profile_name.textContent = profileData.perfil.nome;
    
    // Atualização da ocupação
    const profile_job = document.getElementById("profile-job");
    profile_job.textContent = profileData.perfil.cargo;
    profile_job.href = profileData.perfil.links.linkedin;
    
    // Atualização do local de trabalho
    const profile_place = document.getElementById("profile-place");
    profile_place.textContent = profileData.perfil.localizacao;
    profile_place.href = profileData.perfil.links.maps;
        
    // Atualização do telefone de contato
    const profile_phone = document.getElementById("profile-phone");
    profile_phone.textContent = profileData.perfil.telefone;
    profile_phone.href = profileData.perfil.links.whatsapp;
        
    // Atualização do e-mail de contato
    const profile_email = document.getElementById("profile-email");
    profile_email.textContent = profileData.perfil.email;
    profile_email.href = `mailto:${profileData.perfil.email}`;
            
    // Atualização Sobre mim
    const profile_information = document.getElementById("profile-information");
    profile_information.textContent = profileData.perfil.sobre;

}

function updateSkills(profileData) {
    const softSkillsList = document.getElementById("softSkills");

   softSkillsList.innerHTML = profileData.competencias.pessoais
    .map(softSkill => `
        <li class="personal_competences_list">${softSkill}
        </li>
    `)
    .join('');  

    const hardSkillsList = document.getElementById("hardSkills");

    hardSkillsList.innerHTML = profileData.competencias.profissionais
        .map(hardSkill => `
            <li class="professional_competences_list_item">
                <img src="${hardSkill.icone}" alt="${hardSkill.nome} title="${hardSkill.nome}">
            </li>
        `)
        .join('');
}

function updateExperiences(profileData) {
    const experienceList = document.getElementById("professional_experience");

    experienceList.innerHTML = profileData.experiencias
        .map(exp => `
            <li class="experience_list_item">
                <span class="experience_list_item_title"><h3>${exp.cargo}</h3></span>
                <span class="experience_list_item_place">${exp.instituicao}</span>
                <span class="experience_list_item_data">${exp.periodo}</span>
                <span class="experience_list_item_description">${exp.descricao}</span>
            </li>
        `)
        .join('');
}

function updatePortfolio(profileData) {
    const portfolioList = document.getElementById("portfolio_list"); // atenção ao ID

    portfolioList.innerHTML = profileData.portfolio
        .map(item => `
            <li class="portfolio_list_item">
                <span class="portfolio_list_item_title github_icon">
                    <h3>${item.titulo}</h3>
                </span>
                <a href="${item.repositorio}" target="_blank">${item.descricao}</a>
            </li>
        `)
        .join('');
}

function updateLanguages(profileData) {
    // Seleção da ul dos idiomas
    const languagesList = document.querySelector("#languages ul");

    languagesList.innerHTML = profileData.idiomas
        .map(idioma => `<li>${idioma}</li>`)
        .join('');
}
// Executa quando DOM estiver pronto
document.addEventListener("DOMContentLoaded", async () => {
    const profileData = await fetchProfileData();
    updateProfileInfo(profileData);
    updateSkills(profileData);
    updateExperiences(profileData);
    updatePortfolio(profileData);
    updateLanguages(profileData);
    console.log(profileData);
});