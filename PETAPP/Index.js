let pets = [
    {
      breed: 'Golden Retriever',
      name: 'Max',
      sex: 'Male',
      age: 5,
      image: 'Images/Max.jpg'
    },
    {
      breed: 'Bengal Cat',
      name: 'Luna',
      sex: 'Female',
      age: 3,
      image: 'Images/Luna.jpg'
    },
    {
      breed: 'Arabian Horse',
      name: 'Spirit',
      sex: 'Male',
      age: 7,
      image: 'Images/Spirit.jpg'
    },
    {
      breed: 'Siamese Cat',
      name: 'Milo',
      sex: 'Male',
      age: 2,
      image: 'Images/Milo.jpg'
    },
    {
      breed: 'Dachshund',
      name: 'Daisy',
      sex: 'Female',
      age: 4,
      image: 'Images/Daisy.jpg'
    },
    {
      breed: 'Labrador Retriever',
      name: 'Charlie',
      sex: 'Male',
      age: 6,
      image: 'Images/Charlie.jpg'
    },
    {
      breed: 'Maine Coon',
      name: 'Bella',
      sex: 'Female',
      age: 1,
      image: 'Images/Bella.jpg'
    },
    {
      breed: 'French Bulldog',
      name: 'Buddy',
      sex: 'Male',
      age: 3,
      image: 'Images/Buddy.jpg'
    },
    {
      breed: 'Percheron Horse',
      name: 'Titan',
      sex: 'Male',
      age: 8,
      image: 'Images/Titan.jpg'
    },
    {
      breed: 'Cocker Spaniel',
      name: 'Rex',
      sex: 'Male',
      age: 4,
      image: 'Images/Rex.jpg'
    },
    {
      breed: 'Ragdoll Cat',
      name: 'Whiskers',
      sex: 'Female',
      age: 2,
      image: 'Images/Whiskers.jpg'
    },
    {
      breed: 'Poodle',
      name: 'Lily',
      sex: 'Female',
      age: 3,
      image: 'Images/Lily.jpg'
    },
    {
      name: "Barry",
      breed: "Borzoi",
      age: 3,
      sex: "Male",
      image: "Images/Barry.jpg"
    },
    {
      name: "Ben",
      breed: "Basset Hound",
      age: 4,
      sex: "Male",
      image: "Images/Ben.jpg"
    },
    {
      name: "Sydney",
      breed: "Sphynx Cat",
      age: 2,
      sex: "Female",
      image: "Images/Sydney.jpg"
    },
    {
      name: "Trisha",
      breed: "Toucan Bird",
      age: 2,
      sex: "Female",
      image: "Images/Trisha.jpg"
    },
    {
      name: "Ned",
      breed: "Newfoundland",
      age: 5,
      sex: "Male",
      image: "Images/Ned.jpg"
    },
    {
      name: "Kerry",
      breed: "Kiwi Bird",
      age: 1,
      sex: "Female",
      image: "Images/Kerry.jpg.webp"
    }
  ];
  
  let currentIndex = 0;
  const cardsPerload = 9;
  
  let firstLoad =true;
  
  function loadPetCards() {
    const container = document.getElementById('cards-container');
    if (firstLoad) {
    container.innerHTML = '';
    firstLoad = false;
    }

    const currentPets = pets.slice(currentIndex, currentIndex + cardsPerload);

    currentPets.forEach(pet => {
        const col = document.createElement('div');
        col.classList.add('col-lg-4', 'col-md-6', 'col-sm-12');

        const card = document.createElement('div');
        card.classList.add('pet-card');

        const img = document.createElement('img');
        img.src = pet.image;
        img.alt = pet.name;
        img.classList.add('pet-image', 'w-100', 'img-fluid');
        card.appendChild(img);

        const info = document.createElement('div');
        info.classList.add('pet-info');

        info.innerHTML = `
            <h5>${pet.name}</h5>
            <p>Breed: ${pet.breed}</p>
            <p>Sex: ${pet.sex}</p>
            <p>Age: ${pet.age} years</p>
        `;

        const removeBtn = document.createElement('button');
        removeBtn.classList.add('btn','btn-danger','mx-2' );
        removeBtn.textContent = 'Remove';
        removeBtn.addEventListener('click', function () {
            col.remove();
        });

        info.appendChild(removeBtn);
        card.appendChild(info);
        col.appendChild(card);
        container.appendChild(col);
    });

    currentIndex += cardsPerload;

const loadMoreBtn = document.getElementById('load-more-btn')
    if (currentIndex >= pets.length && loadMoreBtn) {
      loadMoreBtn.style.display = 'none';  
    }
}
function Creationmodal() {
  const modal = new bootstrap.Modal(document.getElementById('createmodal'));
  modal.show();
}
function updateSubmissionList(){
  document.getElementById("PetForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const namesubmit = document.getElementById("petName").value;
    const agesubmit = document.getElementById("petAge").value;
    const breedsubmit = document.getElementById("petBreed").value;
    const sexsubmit = document.getElementById("petSex").value;

    const submission = {
      name: namesubmit,
      sex: sexsubmit,
      breed: breedsubmit,
      age: agesubmit,
      image: 'Images/default.jpg'
    };
    pets.push(submission);
    loadPetCards();






    document.getElementById("PetForm").reset();

    const modalElement = document.getElementById("createmodal");
    const modal = bootstrap.Modal.getInstance(modalElement);
    modal.hide();
});
}



  window.addEventListener('DOMContentLoaded', function(){
    loadPetCards();
    updateSubmissionList();

  

  
   document.getElementById('load-more-btn').addEventListener('click',
    loadPetCards);
  });
