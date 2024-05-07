<?php

namespace App\Http\Controllers;

use App\Models\Contacto;
use Illuminate\Http\Request;

class ContactoController extends Controller
{
    public function index(){

        $contactos = Contacto::orderBy('id', 'DESC')->paginate(10);

        return view('contactos.index', compact('contactos'));
    }

}
