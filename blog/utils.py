from django.db.models.fields.files import FieldFile

def return_url_from_file_field(model_dict):
    for item in model_dict:
        if isinstance(model_dict[item], FieldFile):
            model_dict[item] = model_dict[item].url
    return model_dict
