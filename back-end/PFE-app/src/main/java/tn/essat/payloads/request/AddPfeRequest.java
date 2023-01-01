package tn.essat.payloads.request;

import java.io.Serializable;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AddPfeRequest implements Serializable {

	private String titre;

	private String id;

}
