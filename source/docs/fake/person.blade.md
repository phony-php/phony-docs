---
title: Person
description: Person Fake
extends: _layouts.documentation
section: content
---
@php
$🙃 = (new Phonyland\Phony('en'));
@endphp

@include('_partials._attribute_name_listing', [
    'language'      => 'en',
    'group'         => 'person',
    'attributes'    => [
        'name',
        'name_with_middle',
        'first_name',
        'middle_name',
        'male_first_name',
        'female_first_name',
        'last_name',
        'prefix',
        'suffix',
        //'initials',
    ],
])

@include('_partials._attribute_listing', [
    'language'      => 'en',
    'group'         => 'person',
    'attributes'    => [
        [
            'name'          => 'name',
            'description'   => 'Retrieves a random name for a person.',
        ],
        [
            'name'          => 'name_with_middle',
            'description'   => 'Retrieves a random name with middle name for a person.',
        ],
        [
            'name'          => 'first_name',
            'description'   => 'Retrieves a random first name for a person.',
        ],
        [
            'name'          => 'middle_name',
            'description'   => 'Retrieves a random middle name for a person.',
        ],
        [
            'name'          => 'male_first_name',
            'description'   => 'Retrieves a random male first name for a person.',
        ],
        [
            'name'          => 'female_first_name',
            'description'   => 'Retrieves a random female first name for a person.',
        ],
        [
            'name'          => 'last_name',
            'description'   => 'Retrieves a random last name for a person.',
        ],
        [
            'name'          => 'prefix',
            'description'   => 'Retrieves a random prefix for a person.',
        ],
        [
            'name'          => 'suffix',
            'description'   => 'Retrieves a random suffix for a person.',
        ],
        //[
        //    'name'          => 'initials',
        //    'description'   => 'Retrieves a random initials for a person.',
        //],
    ],
])
