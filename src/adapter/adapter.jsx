
export const filmsAdapter = (data) => {
  return data.map((item) => {
    return {
      id: item[`id`],
      name: item[`name`],
      description: item[`description`],
      rating: item[`rating`],
      director: item[`director`],
      starring: item[`starring`],
      runTime: item[`run_time`],
      genre: item[`genre`],
      released: item[`released`],
      posterImage: item[`poster_image`],
      previewImage: item[`preview_image`],
      backgroundImage: item[`background_image`],
      backgroundColor: item[`background_color`],
      videoLink: item[`video_link`],
      previewVideoLink: item[`preview_video_link`],
      runTime: item[`run_time`]
    };
  });
};

export const promoAdapter = (item) => {
  return {
    id: item[`id`],
    name: item[`name`],
    description: item[`description`],
    rating: item[`rating`],
    director: item[`director`],
    starring: item[`starring`],
    runTime: item[`run_time`],
    genre: item[`genre`],
    released: item[`released`],
    posterImage: item[`poster_image`],
    previewImage: item[`preview_image`],
    backgroundImage: item[`background_image`],
    backgroundColor: item[`background_color`],
    videoLink: item[`video_link`],
    previewVideoLink: item[`preview_video_link`],
    runTime: item[`run_time`]
  };
};

export const userAdapter = (data) => {
  return {
  id: data[`id`],
  avatarUrl: data[`avatar_url`],
  email: data[`email`],
  name: data[`name`]
  };
};
