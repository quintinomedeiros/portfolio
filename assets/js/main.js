
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

    // Atualização das competências pessoais
    const soft_skills_list = document.getElementById("softSkills");
    profileData.competencias.pessoais.forEach(pessoal => {
        // Cria o <li> principal
        const listItem = document.createElement("li");

        // inclui o texto dentro do <li>
        listItem.textContent = pessoal;
        listItem.classList.add("personal_competences_list");

        // Adiciona o <li> no <ul>
        soft_skills_list.appendChild(listItem);
    });

    // Atualização das competências pofissionais
    const hard_skills_list = document.getElementById("hardSkills");
    profileData.competencias.profissionais.forEach(profissional => {
        // Cria o <li> principal
        const listItem = document.createElement("li");
        listItem.classList.add("professional_competences_list_item");

        // inclui o ícone dentro do <li>
        const img = document.createElement("img");
        img.src = profissional.icone;
        img.alt = profissional.nome;
        img.title = profissional.nome;
        listItem.appendChild(img);

        // Adiciona o <li> no <ul>
        hard_skills_list.appendChild(listItem);
    });


    // Atualização da Experiência profissional
    const experienceList = document.getElementById("professional_experience");

    profileData.experiencias.forEach(exp => {
        // Cria o <li> principal
        const li = document.createElement("li");
        li.classList.add("experience_list_item");
    
        // Título (cargo)
        const titleSpan = document.createElement("span");
        titleSpan.classList.add("experience_list_item_title");
    
        const titleH3 = document.createElement("h3");
        titleH3.textContent = exp.cargo;
        titleSpan.appendChild(titleH3);
    
        // Instituição
        const placeSpan = document.createElement("span");
        placeSpan.classList.add("experience_list_item_place");
        placeSpan.textContent = exp.instituicao;
    
        // Período
        const dateSpan = document.createElement("span");
        dateSpan.classList.add("experience_list_item_data");
        dateSpan.textContent = exp.periodo;
    
        // Descrição
        const descSpan = document.createElement("span");
        descSpan.classList.add("experience_list_item_description");
        descSpan.textContent = exp.descricao;
    
        // Monta a ordem dentro do <li>
        li.appendChild(titleSpan);
        li.appendChild(placeSpan);
        li.appendChild(dateSpan);
        li.appendChild(descSpan);
    
        // Adiciona o <li> no <ul>
        experienceList.appendChild(li);
    });

    // Atualização do portfólio
    const portfolioList = document.getElementById("potfolio_list"); // atenção ao ID

    // Percorre o array do JSON
    profileData.portfolio.forEach(item => {
        // Cria o <li>
        const li = document.createElement("li");
        li.classList.add("portfolio_list_item");

        // Span com o título
        const titleSpan = document.createElement("span");
        titleSpan.classList.add("portfolio_list_item_title", "github_icon");

        const titleH3 = document.createElement("h3");
        titleH3.textContent = item.titulo;
        titleSpan.appendChild(titleH3);

        // Link para o repositório
        const repoLink = document.createElement("a");
        repoLink.href = item.repositorio;
        repoLink.target = "_blank";
        repoLink.textContent = item.descricao;

        // Monta o <li>
        li.appendChild(titleSpan);
        li.appendChild(repoLink);

        // Adiciona o <li> no <ul>
        portfolioList.appendChild(li);
    });

    // Atualização do idioma
    const languagesList = document.querySelector("#languages .languages_list");

    // Percorre o array do JSON
    profileData.idiomas.forEach(idioma => {
        const idiomaLi = document.createElement("li");
        idiomaLi.textContent = idioma;
        languagesList.appendChild(idiomaLi);
    });
}

(async () => {
    const profileData = await fetchProfileData();
    updateProfileInfo(profileData);
    console.log(profileData);
})();